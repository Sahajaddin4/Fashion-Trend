import React, {  useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
const AdminPage = () => {

    const[input,setInput]=useState({
        product_name:"",
        product_details:"",
        product_price:0,
        product_sitename:"",
        product_cattegory:"",
        
    })

  
    
    function handleInput(event)
    {
        const {name}=event.target;
        setInput(prevValue=>{
            return({
                ...prevValue,
                [name]:event.target.value
            })
        });
    }

    const [image,setImage]=useState();

    function handleImage(event)
    {
        setImage(event.target.files[0]);

    }


    async function addProduct(e)
    {
        e.preventDefault();

        const formdata=new FormData();
        formdata.append('product_name',input.product_name);
        formdata.append('product_details',input.product_details);
        formdata.append('product_price',input.product_price);
        formdata.append('product_sitename',input.product_sitename);
        formdata.append('product_cattegory',input.product_cattegory);
        formdata.append('product_image',image);

        const configImage={
            headers:{
                "content-type":"multipart/form-data"
            }
        }

        const sendingUrl="http://localhost:5000/addproduct";

        const res= await axios.post(sendingUrl,formdata,configImage);
        console.log(res);

    }



   
    
    return (
        <>
            
            <Container className='shadow ms-auto mt-5 p-5 col-md-6' >
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control name="product_name" onChange={handleInput} type="text"  value={input.product_name} placeholder="Product name" />
                       
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Product Details</Form.Label>
                        <Form.Control name="product_details"  onChange={handleInput} value={input.product_details } type="textarea" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control name="product_price" onChange={handleInput} value={input.product_price} type="number" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>From which website</Form.Label>
                        <Form.Control name="product_sitename" onChange={handleInput} value={input.product_sitename} type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Product image</Form.Label>
                        <Form.Control name='product_image' onChange={handleImage} value={input.product_image} type="file" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Product Cattegory</Form.Label>
                        <Form.Control name='product_cattegory' value={input.product_cattegory} onChange={handleInput} as="select" >
                            <option value=""></option>
                            <option value="Shirts" >Shirts</option>
                            <option value="Hoody" >Hoody</option>
                            <option value="Pants" >Pants</option>
                        </Form.Control>
                    </Form.Group> 

                    <Button variant="primary" onClick={addProduct} type="submit">
                        Add product
                    </Button>
                </Form>
            </Container>
        </>
    );
}

export default AdminPage;