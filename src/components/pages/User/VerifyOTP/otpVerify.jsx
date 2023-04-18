import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { ToastContainer,toast } from 'react-toastify';
import axios from 'axios';


const OtpVerify = () => {

    const inputStyle = {
        border: 'none',
        borderBottom: '1px solid black',
        borderRadius: 0
    };
//Input changes handle
    const [userOtp,setUserOtp]=useState();
  
    function handleUserOtp(event)
    {
        const {value}=event.target
    setUserOtp(value);
    }

//Form submission for LOgin
async function verify(e){
    e.preventDefault();
   
    const user_email=JSON.parse(localStorage.getItem('user_email'));
    const otp = {
        
        user_email:user_email,
        otp:userOtp,
        }

    console.log(typeof(otp.otp));
    const url="http://localhost:5000/verifyotp";
    const  res=await axios.post(url,otp,{
        headers:{
            'Content-Type':"application/json"
        }
    });
  
    console.log(res);
    if(res.data.msg==="otp verification done.")
    {
       
        toast.success('otp verification done.😍',{
            position:toast.POSITION.TOP_CENTER,
            autoClose:3000,
            theme:'dark'
        })
        //console.log(res.data.auth);

        setTimeout(() => {
            window.location.href="/login";
        },2000);
    }
    else if( res.status==="Wrong OTP 😢")
    {
        toast.error("Wrong OTP 😢",{
            position:toast.POSITION.TOP_CENTER,
            autoClose:3000,
            theme:'light'
        })
      
       setUserOtp(0);
    }

    else if(res.status===500)
    {
        toast.error("Internal server error.",
        { 
            position:toast.POSITION.TOP_CENTER,
            autoClose:3000,
            theme:'light'

        })

        setTimeout(()=>
        {
            window.location.reload();
        },2000)
    }

   
}

    return (
        <>
            <Container bg="dark" className=' mt-5 p-3'>
                <Row>
                    <Col md={6} className='ms-auto me-auto'>
                        <Form className='shadow-lg p-2'>
                            <header style={{ textAlign: "center", fontSize: "2rem", marginBottom: "10px" ,borderBottom:"2px solid"}} >OTP verification</header>


                            <Form.Group className='m-3'>
                                <div className="d-flex align-items-center">
                                    <Form.Control style={inputStyle} className='m-1' type='text' onChange={handleUserOtp} name="otp" placeholder='enter otp' />
                                </div>
                            </Form.Group>

                            <Form.Group className='m-5'>
                                <div className="d-flex align-items-center">
                                <Button variant='primary' className='ms-auto me-auto' onClick={verify} type='submit'>Verify</Button>
                                </div>
                            </Form.Group>

                        </Form>


                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </>
    )
}

export default OtpVerify;
