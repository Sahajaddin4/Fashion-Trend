import React from 'react';
import { Container, Form,Button } from 'react-bootstrap';

const SearchBar = () => {
    return (
        <>
            <Container className='shadow'>
                <Form className="d-flex p-2 m-2" >
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="p-2 me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Container>
        </>
    );
}

export default SearchBar;
