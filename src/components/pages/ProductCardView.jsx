import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import AnalyzeResultShow from './AfterAnalyzeProduct/analyseResult';

const qualityAnalysis=[];
const ProductCardView = (props) => {
  const { product_name, product_details, product_price, product_image, product_reviews } = props.product;
  const image = 'http://localhost:5000/uploads/' + product_image;

  const [result, setResult] = useState(null);

  async function selectedProduct() {
    const productName = product_name;
    const reviews = await product_reviews.map((re) => {
      return re.comment;
    });
     qualityAnalysis.push({
      productName:productName,
      reviews:reviews
     })
  }

  async function sendForAnalyze() {
  

    try {
      const response = await axios.post('http://localhost:5000/reviewanalyse', qualityAnalysis, {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      });
      setResult(response.data.result);
    } catch (error) {
      toast.error('unexpected error 😞 sorry for the inconvenience', {
        position: 'top-center',
        theme: 'dark',
        autoClose: 5000,
      });
    }
  }

  return (
    <>
      <Card className="mt-3">
        <Card.Img variant="top" style={{ width: '200px' }} onClick={selectedProduct} src={image} alt="product image" />
        <Card.Body>
          <Card.Title>{product_name}</Card.Title>
          <Card.Text>{product_details}</Card.Text>
          <Card.Text>
            <i className="fa-solid fa-indian-rupee-sign m-1"></i>
            {product_price}
          </Card.Text>

          <Button variant="primary" onClick={sendForAnalyze}>
            check quality
          </Button>

          {result && <AnalyzeResultShow result={result} setResult={()=> setResult(null)}/>}
        </Card.Body>
      </Card>
      <ToastContainer />
    </>
  );
};

export default ProductCardView;
