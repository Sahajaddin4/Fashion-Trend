import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Modal, ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';

const ResetPassword = (props) => {
       
    //For modal
    const [userInput,setUserInput]=useState({
        user_name:"",
        user_password:"",
        user_confirmPassword:""
    });
    const handleInput=(event)=>
    {
       const {name}=event.target;
    
       setUserInput(prevValue=>{
        return({
            ...prevValue,
            [name]:event.target.value
        })
       }) ;
    }
    
   const resetPassword=async (e)=>
   {
      e.preventDefault();

      const passwordRegex =/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/; // password should contain at least 1 number, 1 alphabet, and 1 special character
 
   
  if(!passwordRegex.test(userInput.user_password)){
      toast.error('Password should contain at least one number, one alphabet, and one special character',{
          position:toast.POSITION.TOP_CENTER,
          autoClose:3000,
          theme:'dark'
      });
      setUserInput({
       
          user_email:"",
          
          user_password:"",
          user_confirmPassword:""
      });
      //return;
    }

    else{

       if(userInput.user_password===userInput.user_confirmPassword)
       {
           const updatePassword={
            user_email:userInput.user_email,
            user_password:userInput.user_password
           }

         const res=await axios.post('http://localhost:5000/resetpassword',updatePassword);

         if(res.data.msg==="Password is updated successfully, You can login now")
         {
            toast.success(res.data.msg,{
                position:'top-center',
                autoClose:2000,
                theme:'dark'
            });
            props.onHide()
         }
         else if(res.data.msg==="User not found ❌! create Account first ."){
            toast.error(res.data.msg,{
                position:'top-center',
                autoClose:2000,
                theme:'dark'
            })
            props.onHide()
            setTimeout(()=>{
                window.location.href="/register";
            },2000)
         }
         else{
            toast.error(res.data.err,{
                position:'top-center',
                autoClose:2000,
                theme:'dark'
            })
            setUserInput({
                user_email:"",
                user_password:"",
                user_confirmPassword:""
            });
         }
       }
        
    }
     //hide modal
   }


    return (
        <div>
            <Modal className='shadow' 
            {...props}
            >
                <Form>
                <header style={{ textAlign: "center", fontSize: "2rem", marginBottom: "10px" ,borderBottom:"2px solid"}}>Reset Password</header>
                    <Form.Group className='m-3'>

                    <Form.Control type='email' onChange={handleInput} name='user_email'placeholder='enter email'/>
                    
                    </Form.Group>
                    
                    <Form.Group className='m-3'>
                    
                    <Form.Control type='password ' onChange={handleInput} name='user_password'placeholder='enter new Password'/>
                    
                    </Form.Group>
                    
                    <Form.Group className='m-3'>
                    
                    <Form.Control type='password ' onChange={handleInput} name='user_confirmPassword'placeholder='enter new Password'/>
                    
                    </Form.Group>

                    <Form.Group className='m-3'>
                    <Button type='submit' onClick={resetPassword} variant='primary' className='p-1 m-1'>Reset</Button>    
                    </Form.Group>              
                </Form>
                <ToastContainer />
            </Modal>
        </div>
    );
}

export default ResetPassword;
