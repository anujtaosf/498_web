import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './FidgetArrow.css';

const FidgetArrow = () => {
  const [activeArrow, setActiveArrow] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        setActiveArrow(e.key);
      }
    };

    const handleKeyUp = () => {
      setActiveArrow(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <Card bg="light" className="p-3">
      <Card.Title>Arrow Fidget</Card.Title>
      <Card.Text className="fst-italic">Keyboard inputs: arrow keys</Card.Text>
      <div className="arrow-container">
        <div className={`arrow up ${activeArrow === 'ArrowUp' ? 'active' : ''}`}></div>
        <div className="arrow-row">
          <div className={`arrow left ${activeArrow === 'ArrowLeft' ? 'active' : ''}`}></div>
          <div className={`arrow center`}></div>
          <div className={`arrow right ${activeArrow === 'ArrowRight' ? 'active' : ''}`}></div>
        </div>
        <div className={`arrow down ${activeArrow === 'ArrowDown' ? 'active' : ''}`}></div>
      </div>
    </Card>
  );
};

export default FidgetArrow;
