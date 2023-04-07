import React from 'react';
import {Card,Button} from 'react-bootstrap';
const ProductCardView = (props) => {
  
  const{product_name,product_details,product_price,product_image}=props.product;
   const image='http://localhost:5000/uploads/'+product_image;
   
      return (
       <>
        <Card  className='mt-3'>
      <Card.Img variant="top" style={{ width:'200px' }}  src={image} alt='product image' />
      <Card.Body>
        <Card.Title>{product_name}</Card.Title>
        <Card.Text >
        {product_details}
        </Card.Text>
        <Card.Text >
        {product_price}
        </Card.Text>

        <Button variant="primary" href='#'>checkout</Button>
      </Card.Body>
    </Card>
       </>
    );
}

export default ProductCardView;
