import React from 'react';
import {Card,Button} from 'react-bootstrap';
const ProductCardView = () => {
    return (
       <>
        <Card  className='mt-3'>
      <Card.Img variant="top" style={{ width:'200px' }}  src="https://th.bing.com/th/id/OIP.AhD6OCBhPIQWy6sJ8ehb4gHaHa?w=182&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt='product image' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text >
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
       </>
    );
}

export default ProductCardView;
