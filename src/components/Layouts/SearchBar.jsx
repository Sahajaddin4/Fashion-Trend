import React, { useState } from 'react';
import { Container, Form,Button } from 'react-bootstrap';
import axios from 'axios';
const SearchBar = () => {
     const [search,setSearch]=useState('');

    function handleChange(event)
    {
        const search_product=event.target.value;
      
        setSearch(search_product);
    }


   async function submitForm(e)
    {
        const url='http://localhost/5000/product';
        e.preventDefault();
        try {
            axios.get(url,{search});

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Container className='shadow'>
                <Form className="d-flex p-2 m-2" method='post' >
                    <Form.Control
                        type="text"
                        name="search_product"
                        placeholder="Search"
                        className="p-2 me-2"
                        aria-label="Search"
                        onChange={handleChange}
                        
                    />
                    <Button variant="outline-success" type='submit' onClick={submitForm}>Search</Button>
                </Form>
            </Container>
        </>
    );
}

export default SearchBar;
