/**
 * 
 * A 3D fidget ball that rotates based on user scroll input in both vertical and horizontal directions.
 * Simulates infinite scrolling within a hidden scroll container and maps deltas to 3D transforms.
 *
 * @returns {JSX.Element}
 */

import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'react-bootstrap';
import './FidgetScrollBall.css';

const FidgetScrollBall = () => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const scrollRef = useRef(null);
  const lastScrollY = useRef(0);
  const lastScrollX = useRef(0);

  useEffect(() => {
    const container = scrollRef.current;
    container.scrollTop = 500;
    container.scrollLeft = 500;
    lastScrollY.current = 500;
    lastScrollX.current = 500;

    const handleScroll = () => {
      const deltaY = container.scrollTop - lastScrollY.current;
      const deltaX = container.scrollLeft - lastScrollX.current;

      lastScrollY.current = container.scrollTop;
      lastScrollX.current = container.scrollLeft;

      setRotationX((prev) => prev + deltaY);
      setRotationY((prev) => prev + deltaX);

      // Reset scroll to simulate infinite scroll
      if (
        container.scrollTop <= 10 ||
        container.scrollTop >= container.scrollHeight - container.clientHeight - 10
      ) {
        container.scrollTop = 500;
        lastScrollY.current = 500;
      }
      if (
        container.scrollLeft <= 10 ||
        container.scrollLeft >= container.scrollWidth - container.clientWidth - 10
      ) {
        container.scrollLeft = 500;
        lastScrollX.current = 500;
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Card bg="light" className="p-4 text-center scroll-wrapper">
      <div ref={scrollRef} className="scroll-sensor">
        <div className="scroll-padding" />
      </div>
      
      <div
        className="scroll-ball"
        style={{
          transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
        }}
      />
    </Card>
  );
};

export default FidgetScrollBall;
