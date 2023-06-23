import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { toast } from "react-toastify";
import jwtDecode from 'jwt-decode';

const Header = () => {
     const [loginIcon, setLoginIcon] = useState(false);
     const [admin, setAdmin] = useState(false);
     const [contact, setContact] = useState(false);
     const [about, setAbout] = useState(false);
     const [home, setHome] = useState(false);
     const [isAuthenticated, setIsAuthenticated] = useState(false);

//navbar styling
const customStyle={
     position: 'fixed',
     top: 0,
     width: '100%'

}

     useEffect(() => {
          const token=localStorage.getItem('token');
          if (token) {
               const decodedToken=jwtDecode(token);
               if(decodedToken.exp *1000 <Date.now())
               {
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                    setIsAuthenticated(false);
               }
               else{
                   
                    setIsAuthenticated(true);
               }
          }
     }, [])

     const handleHomeMouseOver = () => {
          setHome(true);
     };

     const handleHomeMouseOut = () => {
          setHome(false);
     };

     const handleAboutMouseOver = () => {
          setAbout(true);
     };

     const handleAboutMouseOut = () => {
          setAbout(false);
     };

     const handleContactMouseOver = () => {
          setContact(true);
     };

     const handleContactMouseOut = () => {
          setContact(false);
     };

     const handleAdminMouseOver = () => {
          setAdmin(true);
     };

     const handleAdminMouseOut = () => {
          setAdmin(false);
     };
     const handleLogout = () => {

          localStorage.removeItem('token');
          localStorage.removeItem('user');

          setIsAuthenticated(false);
          toast.success('Account Log out successful', {
               position: 'top-center',
               autoClose: 3000,
               theme: 'dark'
          })
          setTimeout(() => {
               window.location.reload();
          }, 3000)

     }
     return (
          <>
               <Navbar bg="light" expand="lg" className="shadow " style={customStyle}>
                    <Container>
                         <Navbar.Brand><i className="fa-sharp fa-solid fa-cart-shopping me-1" ></i>Fashion Trend</Navbar.Brand>
                         <Nav.Link href="/" onMouseOver={handleHomeMouseOver} onMouseOut={handleHomeMouseOut}>{home === true ? "Home" : <span className="material-symbols-outlined">Home</span>}</Nav.Link>
                         <Nav.Link href="/about" onMouseOver={handleAboutMouseOver} onMouseOut={handleAboutMouseOut} >{about === true ? "About us" : <i className="fa-solid fa-address-card"></i>}</Nav.Link>
                         <Nav.Link href="/contact" onMouseOver={handleContactMouseOver} onMouseOut={handleContactMouseOut}>{contact === true ? "Contact us" : <span className="material-symbols-outlined">support_agent</span>}</Nav.Link>
                         <Nav.Link href="/admin" onMouseOver={handleAdminMouseOver} onMouseOut={handleAdminMouseOut}>{admin === true ? "Add Product" : <span className="material-symbols-outlined">add_box</span>}</Nav.Link>
                         {isAuthenticated === true ? 
                         <NavDropdown title="Account" >
                         <NavDropdown.ItemText>{localStorage.getItem('user')}</NavDropdown.ItemText>
                         <NavDropdown.Item onClick={handleLogout}>log out</NavDropdown.Item>
                         </NavDropdown> :
                              <Nav.Link href="/login" onMouseOver={() => { setLoginIcon(true); }} onMouseOut={() => { setLoginIcon(false) }}>{loginIcon === true ? <i className="fa-solid fa-right-to-bracket fa-beat"></i> : <i className="fa-solid fa-right-to-bracket me-1" ></i>}</Nav.Link>}
                    </Container>
               </Navbar>
          </>
     )
}

export default Header;