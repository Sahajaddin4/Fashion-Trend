import React from 'react';
import {Card,Button} from 'react-bootstrap';
const ProductCardView = (props) => {
    return (
       <>
        <Card  className='mt-3'>
      <Card.Img variant="top" style={{ width:'200px' }}  src={props.product.product_image} alt='product image' />
      <Card.Body>
        <Card.Title>{props.product.product_name}</Card.Title>
        <Card.Text >
        {props.product.product_details}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
       </>
    );
}

export default ProductCardView;
