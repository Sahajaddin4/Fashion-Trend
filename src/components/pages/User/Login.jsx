import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { ToastContainer,toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Login = () => {

    const inputStyle = {
        border: 'none',
        borderBottom: '1px solid black',
        borderRadius: 0
    };
//Input changes handle
    const [userInput,setUserInput]=useState({
        user_email:"",
        user_password:""
    });
  
    function handleUserInput(event)
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

//Form submission for LOgin
async function Login(e){
    e.preventDefault();

    const userData = {
        
        user_email: userInput.user_email,
       
        user_password: userInput.user_password,
        }
   

    const url="http://localhost:5000/userlogin";
    const  res=await axios.post(url,userData,{
        headers:{
            "Content-Type":"application/json"
        }
    })
   
    console.log(res);

    if(res.status===201)
    {
        toast.success('Welcome back !😍',{
            position:toast.POSITION.TOP_RIGHT,
            autoClose:3000,
            theme:'dark'
        })

        setTimeout(() => {
            window.location.href="/loggedin";
        },2000);
    }
    else if( res.status===401)
    {
        toast.error('Error login 😢',{
            position:toast.POSITION.TOP_RIGHT,
            autoClose:3000,
            theme:'dark'
        })
      
        setUserInput({
            user_email:"",
            user_password:""
        })
    }

    else if(res.data.msg==="user not exists!")
    {
        toast.error('User not exist! please create an account first 😢',{
            position:toast.POSITION.TOP_RIGHT,
            autoClose:3000,
            theme:'dark'
        })
        setTimeout(() => {
            window.location.href="/register";
        },2000);
    }
   
}

    return (
        <>
            <Container bg="dark" className=' mt-5 p-3'>
                <Row>
                    <Col md={6} className='ms-auto me-auto'>
                        <Form className='shadow-lg p-2'>
                            <header style={{ textAlign: "center", fontSize: "2rem", marginBottom: "10px" ,borderBottom:"2px solid"}} >User Login</header>


                            <Form.Group className='m-3'>
                                <div className="d-flex align-items-center">
                                   <Form.FloatingLabel> <i className="fa-solid fa-envelope"></i></Form.FloatingLabel>
                                    <Form.Control style={inputStyle} className='m-1' type='email' onChange={handleUserInput} name="user_email" placeholder='enter your email' />
                                </div>
                            </Form.Group>



                            <Form.Group className='m-3'>
                                <div className="d-flex align-items-center">
                                    <Form.FloatingLabel><i className="fa-sharp fa-solid fa-key"></i></Form.FloatingLabel>
                                    <Form.Control style={inputStyle} className='m-1' type='password' onChange={handleUserInput} name="user_password" placeholder='enter password' />
                                </div>
                            </Form.Group>

                            <Form.Group className='m-5'>
                                <div className="d-flex align-items-center">
                                <Button variant='primary' className='w-100' onClick={Login} type='submit'>Login</Button>
                                </div>
                            </Form.Group>

                            
                            <div className='m-5'>
                                <p>Don't have an account ?<Link to={'/register'} ><strong >Sign up</strong></Link></p>
                            </div>
                        </Form>


                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </>
    )
}

export default Login;
