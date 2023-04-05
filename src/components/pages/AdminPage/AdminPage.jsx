import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const AdminPage = () => {
    return (
        <>
            
            <Container className='shadow ms-auto mt-5 p-5 col-md-6' >
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Product name" />
                       
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Product Details</Form.Label>
                        <Form.Control type="textarea" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Shopping Site</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>From which website</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Product image</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Product Cattegory</Form.Label>
                        <Form.Control as="select" >
                            <option value=" "></option>
                            <option value="Shirts" >Shirts</option>
                            <option value="Hoody" >Hoody</option>
                            <option value="Pants" >Pants</option>
                        </Form.Control>
                    </Form.Group> 

                    <Button variant="primary" type="submit">
                        Add product
                    </Button>
                </Form>
            </Container>
        </>
    );
}

export default AdminPage;
