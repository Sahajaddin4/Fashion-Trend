import React, { useState } from 'react';
import { Container, Form,Button } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
const SearchBar = ({handleSearchQuery}) => {
     const [search,setSearch]=useState('');
     
    function handleChange(event)
    {
        const search_product=event.target.value;
         
        setSearch(search_product);
    }


   async function submitForm(e)
    {
        const url=`http://localhost:5000/getproduct?keyword=${search}`;
        e.preventDefault();
        try {
           const products= await axios.get(url,{
            headers:{
                "Content-Type":"application/json",
                authorization:`bearer ${localStorage.getItem('token')}`
            }
           });
          
           if(products.data.getProduct){
            handleSearchQuery(products)
           }
           else{
               toast.error("Please log in first!",{
                position:toast.POSITION.TOP_RIGHT,
                autoClose:3000,
                theme:'light'
               });
               setTimeout(()=>{
                window.location.href="/login"
               },2000);
           }
          
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Container className='shadow'>
                <Form className="d-flex p-2 m-2" method='post' >
                    <Form.Control
                        type="search"
                        name="search_product"
                        placeholder="Search"
                        className="p-2 me-2"
                        aria-label="Search"
                        autoComplete="true"
                        onChange={handleChange}
                        
                    />
                    <Button variant="outline-success" type='submit' onClick={submitForm}><i className="fa-sharp fa-solid fa-magnifying-glass fa-beat-fade"></i></Button>
                </Form>
                <ToastContainer />
            </Container>
        </>
    );
}

export default SearchBar;
