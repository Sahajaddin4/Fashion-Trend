import React,{ useState} from "react";
import { Container,Row,Col } from "react-bootstrap";
import ProductCardView from "./ProductCardView";
import SearchBar from "../Layouts/SearchBar";

export default function Home()
{
    const [products,setProducts]=useState([]);

    function handleSearchQuery(props) {
        setProducts(props.data.getProduct);
    }
   
    return (
        <>
          <Container fluid expand="md" bg="light" className="shadow  p-2" style={{marginTop:"5%", marginBottom:'5%'}} >
            <SearchBar handleSearchQuery={handleSearchQuery}/>
            <Container >
            <Row >
                <Col  md={5} className=" shadow mb-5 mt-5 p-2 border border-dark" style={{textAlign:"center"}}>
                <Container className="shadow mt-2 mb-2 p-2"><header className="fs-3">Myntra</header> </Container>
                    {
                        products.map((product,index)=>
                        {
                            return<ProductCardView key={index} product={product}/>
                        })
                    }
                </Col>
                <Col></Col>
                {/* <Col  md={5} className=" shadow mb-5 mt-5 p-2 border border-dark" style={{textAlign:"center"}}>
                      <Container className="shadow mt-2 mb-2 p-2"><header className="fs-3">Ajio</header> </Container>
                    <ProductCardView />
                </Col> */}

            </Row>
            <Row>
                {/* <Col  md={5} className=" shadow mb-5 mt-5 p-2 border border-dark" style={{textAlign:"center"}}>
                <Container className="shadow mt-2 mb-2 p-2"><header className="fs-3">Messo</header> </Container>
                    <ProductCardView />
                </Col>
                    <Col></Col>
                <Col  md={5} className=" shadow mb-5 mt-5 p-2 border border-dark" style={{textAlign:"center"}}>
                <Container className="shadow mt-2 mb-2 p-2"><header className="fs-3">Flipkart</header> </Container>
                    <ProductCardView />
                </Col> */}
                
            </Row>
            </Container>
          </Container>
        </>
    )
}