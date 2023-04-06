import React, { useState } from 'react';
import { Container, Form,Button } from 'react-bootstrap';
import axios from 'axios';
import Home from '../pages/Home';
const SearchBar = () => {
     const [search,setSearch]=useState('');
     const [products,setProducts]=useState([]);
    function handleChange(event)
    {
        const search_product=event.target.value;
         
        setSearch(search_product);
    }


   async function submitForm(e)
    {
        const url=`http://localhost:5000/getproduct?keyword:${search}`;
        e.preventDefault();
        try {
           const product= await axios.get(url);
            setProducts(product);
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
                        autoComplete
                        onChange={handleChange}
                        
                    />
                    <Button variant="outline-success" type='submit' onClick={submitForm}>Search</Button>
                </Form>
                <Home products={products} />
            </Container>
        </>
    );
}

export default SearchBar;
