/**
 * 
 * Visualizes left-hand key inputs using animated bubbles. Highlights keys
 * in the left-hand region of a QWERTY keyboard (e.g., WASD, QWER).
 */

import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './FidgetLeft.css';

const LEFT_KEYS = [
  'q', 'w', 'e', 'r', 't',
  'a', 's', 'd', 'f', 'g',
  'Shift', 'z', 'x', 'c', 'v'
];

const FidgetLeft = () => {
  const [activeKeys, setActiveKeys] = useState({});

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key === ' ' ? 'Space' : e.key === 'Shift' ? 'Shift' : e.key.toLowerCase();

      if (key === 'Space') {
        setActiveKeys({});
      } else if (LEFT_KEYS.includes(key)) {
        setActiveKeys((prev) => ({
          ...prev,
          [key]: !prev[key],
        }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Card bg="light" className="p-3">
      <Card.Title>Left Hand Fidget</Card.Title>
      <Card.Text className="fst-italic">Keyboard inputs: left hand keys</Card.Text>
      <div className="bubble-container">
        {[0, 1, 2].map((rowIdx) => (
          <div
            key={rowIdx}
            className={`bubble-row ${rowIdx === 1 ? 'offset-row' : ''}`}
          >
            {LEFT_KEYS.slice(rowIdx * 5, rowIdx * 5 + 5).map((key, i) => (
              <div
                key={key}
                className={`bubble ${activeKeys[key] ? 'active' : ''} color-${rowIdx * 5 + i + 1}`}
              />
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default FidgetLeft;
