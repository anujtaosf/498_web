import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'react-bootstrap';
import './FidgetScrollBall.css';

const FidgetScrollBall = () => {
  const [rotation, setRotation] = useState(0);
  const scrollRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const container = scrollRef.current;
    lastScrollY.current = container.scrollTop;

    const handleScroll = () => {
      const delta = container.scrollTop - lastScrollY.current;
      lastScrollY.current = container.scrollTop;

      setRotation((prev) => prev + delta);

      // Reset scrollTop to middle when near edges to fake infinite scroll
      if (container.scrollTop <= 0) {
        container.scrollTop = 500;
        lastScrollY.current = 500;
      } else if (container.scrollTop >= container.scrollHeight - container.clientHeight) {
        container.scrollTop = 500;
        lastScrollY.current = 500;
      }
    };

    container.addEventListener('scroll', handleScroll);
    container.scrollTop = 500; // Start in the middle

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Card bg="light" className="p-4 text-center scroll-wrapper">
      <div ref={scrollRef} className="scroll-sensor">
        <div className="scroll-padding" />
      </div>
      <div
        className="scroll-ball"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </Card>
  );
};

export default FidgetScrollBall;
