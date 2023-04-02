import React from "react";

import {Container } from 'react-bootstrap';

export default function Footer()
{  
    const footerStyle={
        height:'60px',
        bottom:0,
        marginTop:'auto',
        textAlign:'center'
    }
    const date=new Date();
    const today=date.getFullYear();
    
    return (
        <>
            
            <Container fluid  bg="dark" expand="lg "  className=" shadow" style={footerStyle} >
                <p className="display-7 p-4">
                    @CopyRight  {today}
                </p>
            </Container>
            
        </>
    )
}