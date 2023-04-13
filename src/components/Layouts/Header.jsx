import React, { useState } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';


const Header = () => {
    const [loginIcon, setLoginIcon] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [contact, setContact] = useState(false);
    const [about, setAbout] = useState(false);
    const [home, setHome] = useState(false);
    return (
        <>
            <Navbar bg="light" expand="lg" className="shadow " >
                <Container>
                    <Navbar.Brand><i className="fa-sharp fa-solid fa-cart-shopping me-1" ></i>Fashion Trend</Navbar.Brand>
                    <Nav.Link href="/" onMouseOver={() => { setHome(true); }} onMouseOut={() => { setHome(false) }}>{home === true ? "Home" : <span className="material-symbols-outlined">Home</span>}</Nav.Link>
                    <Nav.Link href="/about" onMouseOver={() => { setAbout(true); }} onMouseOut={() => { setAbout(false) }} >{about === true ? "About us" : <i className="fa-solid fa-address-card"></i>}</Nav.Link>
                    <Nav.Link href="/contact" onMouseOver={() => { setContact(true); }} onMouseOut={() => { setContact(false) }}>{contact === true ? "Contact us" : <span class="material-symbols-outlined">support_agent</span>}</Nav.Link>
                    <Nav.Link href="/admin" onMouseOver={() => { setAdmin(true); }} onMouseOut={() => { setAdmin(false) }}>{admin === true ? "Add Product" : <span className="material-symbols-outlined">add_box</span>}</Nav.Link>
                    <Nav.Link href="/login" onMouseOver={() => { setLoginIcon(true); }} onMouseOut={() => { setLoginIcon(false) }}>{loginIcon === true ? <i className="fa-solid fa-right-to-bracket fa-beat"></i> : <i className="fa-solid fa-right-to-bracket me-1" ></i>}</Nav.Link>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;