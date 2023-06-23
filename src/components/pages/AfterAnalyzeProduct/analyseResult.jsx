import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AnalyzeResultShow(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    props.setResult();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: '#f8f9fa', borderBottomColor: '#dee2e6' }}>
          <Modal.Title style={{ color: '#000000' }}>Product Quality Ranking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="list-group">
            {props.result.map((product, index) => (
              <li className="list-group-item" key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white', borderColor: '#dee2e6' }}>
                <h5 className="mb-1">Rank: {index + 1}</h5>
                <p className="mb-1">Product: {product.productName}</p>
                <p className="mb-1">Price: {product.productPrice}</p>
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer style={{ borderTopColor: '#dee2e6' }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
