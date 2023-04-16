import React,{  useState} from "react";
import { Container,Row,Col, } from "react-bootstrap";
import ProductCardView from "./ProductCardView";
import SearchBar from "../Layouts/SearchBar";
export default function Home()
{
    const [products,setProducts]=useState([]);
    //const[isAuthenticated,setIsAuthenticated]=useState(false);
    function handleSearchQuery(props) {
       if(props.data.getProduct){ setProducts(props.data.getProduct)};
    }
   
    return (
        <>
          <Container fluid expand="md" bg="light" className="shadow  p-2" style={{marginTop:"5%", marginBottom:'5%'}} >
            <SearchBar handleSearchQuery={handleSearchQuery}/>
            <Container >
            <Row >
                <Col  md={5} className=" shadow mb-5 mt-5 p-2 border border-dark" style={{textAlign:"center"}}>
                <Container className="shadow mt-2 mb-2 p-2"><header className="fs-3">Myntra</header> </Container>
                <div className="d-flex flex-column" style={{ height: '400px', overflowY: 'scroll',textAlign:"left" }}>
                    {
                        products.map((product,index)=>
                        {   
                            if( product.product_sitename==="Myntra")
                        {   

                            return <ProductCardView key={index} product={product}/>
                        }
                        else{
                            return null;
                        }
                            
                        })
                    }
                    </div>
                </Col>
                <Col></Col>
                <Col  md={5} className=" shadow mb-5 mt-5 p-2 border border-dark" style={{textAlign:"center"}}>
                      <Container className="shadow mt-2 mb-2 p-2"><header className="fs-3">Flipkart</header> </Container>
                    
                      <div className="d-flex flex-column" style={{ height: '400px', overflowY: 'scroll',textAlign:"left" }}>
                    {
                        products.map((product,index)=>
                        {   
                            if( product.product_sitename==="Flipkart")
                        {   

                            return <ProductCardView key={index} product={product}/>
                        }
                        else{
                            return null;
                        }
                            
                        })
                    }
                    </div>

                </Col>

            </Row>
            <Row>
                <Col  md={5} className=" shadow mb-5 mt-5 p-2 border border-dark" style={{textAlign:"center"}}>
                <Container className="shadow mt-2 mb-2 p-2"><header className="fs-3 " style={{color:"#ff00bf"}}>Messo</header> </Container>
                   
                <div className="d-flex flex-column" style={{ height: '400px', overflowY: 'scroll',textAlign:"left" }}>
                    {
                        products.map((product,index)=>
                        {   
                            if( product.product_sitename==="Messo")
                        {   

                            return <ProductCardView key={index} product={product}/>
                        }
                        else{
                            return null;
                        }
                            
                        })
                    }
                    </div>

                </Col>
                    <Col></Col>
                <Col  md={5} className=" shadow mb-5 mt-5 p-2 border border-dark" style={{textAlign:"center"}}>
                <Container className="shadow mt-2 mb-2 p-2"><header className="fs-3">Ajio</header> </Container>
                    
                <div className="d-flex flex-column" style={{ height: '400px', overflowY: 'scroll',textAlign:"left" }}>
                    {
                        products.map((product,index)=>
                        {   
                            if( product.product_sitename==="Ajio")
                        {   

                            return <ProductCardView key={index} product={product}/>
                        }
                        else{
                            return null;
                        }
                            
                        })
                    }
                    </div>

                </Col>
                
            </Row>
            </Container>
          </Container>
        </>
    )
}