import React from 'react';
import {Card,Button} from 'react-bootstrap';
 import axios from 'axios'; 
 import { ToastContainer,toast } from 'react-toastify';
const ProductCardView = (props) => {
   
  const{product_name,product_details,product_price,product_image,product_reviews}=props.product;
   const image='http://localhost:5000/uploads/'+product_image;
   
  
   async function getProductId(){
        const review=product_reviews.map((re)=>{
          return (re.comment);
        })
        


       const response=await axios.post('http://localhost:5000/reviewanalyse',review,{
        headers:{
          authorization:`bearer ${localStorage.getItem('token')}`
        }
       });

    
       if(response.data.msg==="unexpected error 😞 sorry for the inconvnience")
       {
          toast.error(response.data.msg,
            {
              position:'top-center',
              theme:'dark',
              autoClose:5000
            })
       }
       else if(response.data.msg==="Very good quality product. you can but it.😍")
       {
        toast.success(response.data.msg,
          {
            position:'top-center',
            theme:'dark',
            autoClose:5000
          })
       }

       else if(response.data.msg==="You can but not stricty recommended."){

        toast.info(response.data.msg,
          {
            position:'top-center',
            theme:'dark',
            autoClose:5000
          })
       }

       else
       {
        toast.warn(response.data.msg,
          {
            position:'top-center',
            theme:'dark',
            autoClose:5000
          })
       }


    }


      return (
       <>
          <Card  className='mt-3'>
      <Card.Img variant="top" style={{ width:'200px' }} onClick={getProductId} src={image} alt='product image' />
      <Card.Body>
        <Card.Title>{product_name}</Card.Title>
        <Card.Text >
        {product_details}
        </Card.Text>
        <Card.Text >
        <i className="fa-solid fa-indian-rupee-sign m-1"></i>{product_price}
        </Card.Text>

        <Button variant="primary" href='#'>checkout</Button>
      </Card.Body>
    </Card>
    <ToastContainer />
       </>
    );
}

export default ProductCardView;
