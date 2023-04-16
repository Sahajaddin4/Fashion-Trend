import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';

const Register = () => {

    const inputStyle = {
        border: 'none',
        borderBottom: '1px solid black',
        borderRadius: 0
    }

//Form input handle
const [userInput,setUserInput]=useState({
    user_name:"",
    user_email:"",
    user_mobile:"",
    user_password:"",
    user_confirmPassword:""
});
     
function handleInput(event)
{
    const{name}=event.target;
    setUserInput(prevInput=>
        {
            return({
                ...prevInput,
                [name]:event.target.value
            });
        });

}
  
//Form submission
async function createAccount(e){
    e.preventDefault();

  //Password should conatains number,alphabate,specaial character

  const passwordRegex =/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/; // password should contain at least 1 number, 1 alphabet, and 1 special character
 

  if(!passwordRegex.test(userInput.user_password)){
      toast.error('Password should contain at least one number, one alphabet, and one special character',{
          position:toast.POSITION.TOP_RIGHT,
          autoClose:3000,
          theme:'dark'
      });
      setUserInput({
          user_name:"",
          user_email:"",
          user_mobile:"",
          user_password:"",
          user_confirmPassword:""
      });
      return;
  }



if(userInput.user_password===userInput.user_confirmPassword){
    const userData = {
        user_name: userInput.user_name,
        user_email: userInput.user_email,
        user_mobile: userInput.user_mobile,
        user_password: userInput.user_password,
        }
       // console.log(userData);
    const url="http://localhost:5000/userregistration";
    
    const res=await axios.post(url,userData,{
        headers:{
            "Content-Type":"application/json"
        }
    })
   // console.log(res.data.msg);
    if(res.status===201)
    {
        localStorage.setItem("user",JSON.stringify(res.data.user));
        localStorage.setItem("token",JSON.stringify(res.data.auth));
        toast.success('Account created successfully',{
            position:toast.POSITION.TOP_RIGHT,
            autoClose:3000,
            theme:'dark'
        })
        setTimeout(() => {
            window.location.href="/";
        },2000);
    }

    else if( res.status===401)
    {
        toast.error('Account has not been created !. please check',{
            position:toast.POSITION.TOP_RIGHT,
            autoClose:3000,
            theme:'dark'
        })
        setUserInput(
            {
        user_name:"",
        user_email:"",
        user_mobile:"",
        user_password:"",
        user_confirmPassword:""
            }
        )
    }
   
    else if(res.data.msg==='User Already Exist!')
    {
        console.log(res.data.msg);
        toast.error('User Already Exist!',{
            position:toast.POSITION.TOP_RIGHT,
            autoClose:3000,
            theme:'dark'
        })
        setUserInput(
            {
        user_name:"", 
        user_email:"",
        user_mobile:"",
        user_password:"",
        user_confirmPassword:""
            }
        )
    }
   
}


   else
   {
    toast.error('password does not match.',{
        position:toast.POSITION.TOP_RIGHT,
        autoClose:3000,
        theme:'dark'
    })
    setUserInput(
        {
    user_name:"",
    user_email:"",
    user_mobile:"",
    user_password:"",
    user_confirmPassword:""
        }
    )
   }


}
    return (
        <>
            <Container bg="dark" className=' mt-5 p-3'>
                <Row>
                    <Col md={6} className='ms-auto me-auto'>
                        <Form className='shadow-lg p-2'>
                            <header style={{ textAlign: "center", fontSize: "2rem", marginBottom: "10px",borderBottom:"2px solid" }} >User Registraion</header>

                            <Form.Group className='d-flex align-items-center'>
                                <Form.FloatingLabel > <i className="fa-solid fa-user"></i></Form.FloatingLabel>
                                <Form.Control style={inputStyle} className=' m-1' onChange={handleInput} type='text' name="user_name" required value={userInput.user_name} placeholder='enter name' />

                            </Form.Group>

                            <Form.Group className='d-flex align-items-center'>

                                <Form.FloatingLabel > <i className="fa-solid fa-envelope"></i></Form.FloatingLabel>
                                <Form.Control style={inputStyle} className='m-1' onChange={handleInput} type='email' name="user_email" value={userInput.user_email} required placeholder='enter email' />

                            </Form.Group>

                            <Form.Group className='d-flex align-items-center'>
                                <Form.FloatingLabel ><i className="fa-sharp fa-solid fa-mobile"></i></Form.FloatingLabel>
                                <Form.Control style={inputStyle} className='m-1' onChange={handleInput} type='number' name="user_mobile" value={userInput.user_mobile} required placeholder='enter phone no'/>
                            </Form.Group>

                            <Form.Group className='d-flex align-items-center'>
                                <Form.FloatingLabel ><i className="fa-sharp fa-solid fa-key"></i></Form.FloatingLabel>
                                <Form.Control style={inputStyle} className='m-1' onChange={handleInput} type='password' name="user_password" value={userInput.user_password} required placeholder='enter password' />
                            </Form.Group>

                            <Form.Group className='d-flex align-items-center'>
                                <Form.FloatingLabel ><i className="fa-sharp fa-solid fa-key"></i></Form.FloatingLabel>
                                <Form.Control style={inputStyle} className='m-1' onChange={handleInput} type='password' name="user_confirmPassword" value={userInput.user_confirmPassword} required placeholder='enter confirm password' />
                            </Form.Group>

                            <Form.Group className='m-5'>
                                <div className="d-flex align-items-center">
                                <Button variant='primary' className='w-100' onClick={createAccount} type='submit'>Create account</Button>
                                </div>
                            </Form.Group>

                            <div >
                                <p>Already have an account?<Link to={'/login'} ><strong >Login</strong></Link></p>
                            </div>
                        </Form>


                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </>
    );
}

export default Register;
