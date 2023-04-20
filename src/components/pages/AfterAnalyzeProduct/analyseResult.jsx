import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default  function AnalyzeResultShow(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => 
  
    { setShow(false);
      props.setResult();
      
    }


  return (
    <>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Analyze Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul className='border'>
                {props.result.map((product,index)=>
                {
                    return<li className='border m-1' key={index}>
                     <p><strong>Rank :{index+1}</strong>::{product.productName} </p>
                    </li>
                })}
            </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

