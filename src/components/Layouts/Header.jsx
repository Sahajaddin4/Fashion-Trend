import React from "react";
import {Navbar ,Nav,Container} from 'react-bootstrap';


const Header=()=>
{
    return (
    <>
    <Navbar bg="light" expand="lg" className="shadow " >
        <Container>
            <Navbar.Brand><i className="fa-sharp fa-solid fa-cart-shopping" style={{marginRight:"3px"}}></i>Fashion Trend</Navbar.Brand>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Container>
    </Navbar>
    </>
    )
}

export default Header;