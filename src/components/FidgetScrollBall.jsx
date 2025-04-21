import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'react-bootstrap';
import './FidgetScrollBall.css';

const FidgetScrollBall = () => {
  const [rotation, setRotation] = useState(0);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const delta = window.scrollY - lastScrollY.current;
      lastScrollY.current = window.scrollY;

      setRotation((prev) => prev + delta); // can adjust multiplier if too fast
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Card bg="light" className="p-3 text-center">
      <Card.Title>Scroll Ball Fidget</Card.Title>
      <Card.Text className="fst-italic">Scroll the page to make the ball roll</Card.Text>
      <div
        className="scroll-ball"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </Card>
  );
};

export default FidgetScrollBall;
