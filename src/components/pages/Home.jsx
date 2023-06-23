import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCardView from "./ProductCardView";
import SearchBar from "../Layouts/SearchBar";

export default function Home() {
  const [products, setProducts] = useState([]);

  function handleSearchQuery(props) {
    if (props.data.getProduct) {
      setProducts(props.data.getProduct);
    }
  }

  return (
    <Container fluid style={{ marginTop: "5%", marginBottom: "5%" }}>
      <SearchBar handleSearchQuery={handleSearchQuery} />
      <Container>
        <Row>
          <Col md={5} className="shadow mb-5 mt-5 p-2 border border-dark text-center" style={{ backgroundColor: "white" }}>
            <Container className="shadow mt-2 mb-2 p-2" style={{ backgroundColor: "#f8f9fa" }}>
              <h3>e-commerce site 1</h3>
            </Container>
            <div className="d-flex flex-column" style={{ height: '400px', overflowY: 'scroll', textAlign: 'left', border: '1px solid #dee2e6', borderRadius: '5px' }}>
              {products.map((product, index) => {
                if (product.product_sitename === "Myntra") {
                  return <ProductCardView key={index} product={product} />;
                } else {
                  return null;
                }
              })}
            </div>
          </Col>
          <Col></Col>
          <Col md={5} className="shadow mb-5 mt-5 p-2 border border-dark text-center" style={{ backgroundColor: "white" }}>
            <Container className="shadow mt-2 mb-2 p-2" style={{ backgroundColor: "#f8f9fa" }}>
              <h3>e-commerce site 2</h3>
            </Container>
            <div className="d-flex flex-column" style={{ height: '400px', overflowY: 'scroll', textAlign: 'left', border: '1px solid #dee2e6', borderRadius: '5px' }}>
              {products.map((product, index) => {
                if (product.product_sitename === "Flipkart") {
                  return <ProductCardView key={index} product={product} />;
                } else {
                  return null;
                }
              })}
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={5} className="shadow mb-5 mt-5 p-2 border border-dark text-center" style={{ backgroundColor: "white" }}>
            <Container className="shadow mt-2 mb-2 p-2" style={{ backgroundColor: "#f8f9fa" }}>
              <h3>e-commerce site 3</h3>
            </Container>
            <div className="d-flex flex-column" style={{ height: '400px', overflowY: 'scroll', textAlign: 'left', border: '1px solid #dee2e6', borderRadius: '5px' }}>
              {products.map((product, index) => {
                if (product.product_sitename === "Messo") {
                  return <ProductCardView key={index} product={product} />;
                } else {
                  return null;
                }
              })}
            </div>
          </Col>
          <Col></Col>
          <Col md={5} className="shadow mb-5 mt-5 p-2 border border-dark text-center" style={{ backgroundColor: "white" }}>
            <Container className="shadow mt-2 mb-2 p-2" style={{ backgroundColor: "#f8f9fa" }}>
              <h3>e-commerce site 4</h3>
            </Container>
            <div className="d-flex flex-column" style={{ height: '400px', overflowY: 'scroll', textAlign: 'left', border: '1px solid #dee2e6', borderRadius: '5px' }}>
              {products.map((product, index) => {
                if (product.product_sitename === "Ajio") {
                  return <ProductCardView key={index} product={product} />;
                } else {
                  return null;
                }
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
