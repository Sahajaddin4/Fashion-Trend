import React, {  useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';


const AdminPage = () => {

    //const navigate=useNavigation();
    const[input,setInput]=useState({
        product_name:"",
        product_details:"",
        product_price:0,
        product_sitename:"",
        product_cattegory:"",
        product_reviews:[{}]
    })


    const [review, setReview] = useState({
        rating: 1,
        comment: "",
      });
  
    
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



    function handleReviews(event)
    {
        const {name}=event.target;
        setReview(prevReviews=>{
            return (
                {
                    ...prevReviews,
                    [name]:event.target.value
                }
            )
        })
    }


    function handleAddReviews(e)
    {
        e.preventDefault();
        setInput(
            {
                ...input,
            product_reviews:[...input.product_reviews,review]
            }
        )
        setReview(
            {
                rating: 1,
                comment: "",
            }
        )
 
    }
    



    const [image,setImage]=useState();

    function handleImage(event)
    {
        setImage(event.target.files[0]);

    }


    async function addProduct(e)
    {
        e.preventDefault();
          const reviews=input.product_reviews.slice(1)  
      
        const formdata=new FormData();
        formdata.append('product_name',input.product_name);
        formdata.append('product_details',input.product_details);
        formdata.append('product_price',input.product_price);
        formdata.append('product_sitename',input.product_sitename);
        formdata.append('product_cattegory',input.product_cattegory);
        formdata.append('product_image',image);
        formdata.append('product_reviews',JSON.stringify(reviews));
       
        const configImage={
            headers:{
                "content-type":"multipart/form-data"
            }
        }

        const sendingUrl="http://localhost:5000/addproduct";

        const res= await axios.post(sendingUrl,formdata,configImage)
        
       
             
         if(res.status===201)
         {
            toast.success("Product added successfully",{
                position:'top-center',
                autoClose:3000,
                theme: "dark"
             })
             setTimeout(() => {
                setInput({
                    product_name:"",
        product_details:"",
        product_price:0,
        product_sitename:"",
        product_cattegory:"",
        product_reviews:[{}]
                })
            },2000);
           
         }
         else if( res.status===401)
         {
            toast.error("Error !.. failed to add ,try again",{
                position:'top-center',
                autoClose:3000, 
                theme: "dark"
             })
             setTimeout(() => {
                setInput({
                    product_name:"",
        product_details:"",
        product_price:0,
        product_sitename:"",
        product_cattegory:"",
        product_reviews:[{}]
                });
            
            },2000);
         }

         else{
            console.log(res.status);
         }
        
      
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
                        <Form.Control name='product_sitename' value={input.product_sitename} onChange={handleInput} as="select" >
                            <option value=""></option>
                            <option value="Myntra" >Myntra</option>
                            <option value="Ajio" >Ajio</option>
                            <option value="Messo" >Messo</option>
                            <option value="Flipkart" >Flipkart</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Product image</Form.Label>
                        <Form.Control name='product_image' onChange={handleImage}  type="file" />
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
                    <br></br>
                        <ul>
                            {(input.product_reviews).map((re,index)=>{
                                return (<li key={index}>
                                    <strong>Comments:  </strong>{re.comment} <strong>Rating: </strong>{re.rating}
                                </li>)
                            })}
                        </ul>
                    <br></br>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Reviews</Form.Label>
                        <Form.Control name='comment' onChange={handleReviews} value={review.comment} type="textarea" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Product Rating </Form.Label>
                        <Form.Control name='rating' onChange={handleReviews} value={review.rating} type="number" min="1" max="5"/>
                    </Form.Group>

                    <Button variant="secondary" className='p-2 m-5' onClick={handleAddReviews}>
                        Add reviews
                    </Button>

                    <Button variant="primary" className='p-2 m-5' onClick={addProduct} type="submit">
                        Add product
                    </Button>
                </Form>
                <ToastContainer />
            </Container>
        </>
    );
}

export default AdminPage;