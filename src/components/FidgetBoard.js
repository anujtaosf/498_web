import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import FidgetArrow from './FidgetArrow';
import Fidget2 from './Fidget2';
import FeaturesMenu from './FeaturesMenu';
import AddFidget from './AddFidget';

const FidgetBoard = () => {
  const [fidgets, setFidgets] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const addFidget = (Component) => {
    setFidgets([...fidgets, Component]);
  };

  return (
    <Container fluid className="p-4">
      <div className="position-sticky top-0 bg-white z-3 d-flex justify-content-between align-items-center mb-4" style={{ zIndex: 1030 }}>
        <h1 className="text-center flex-grow-1">My Virtual Fidget Board</h1>
        <div className="ms-auto">
          <AddFidget addFidget={addFidget} />
        </div>
      </div>
      <Button variant="light" onClick={() => setShowMenu(!showMenu)} className="mb-3">
        {showMenu ? '< Hide Menu' : '> Show Menu'}
      </Button>
      <Row>
        {showMenu && (
          <Col md={3} className="mb-3">
            <FeaturesMenu />
          </Col>
        )}
        <Col>
          <Row xs={1} md={3} className="g-3">
            {fidgets.map((FidgetComponent, idx) => (
              <Col key={idx}><FidgetComponent /></Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FidgetBoard;