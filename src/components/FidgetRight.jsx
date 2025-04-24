/**
 * 
 * Visualizes right-hand key inputs using animated bubbles. Highlights keys
 * in the right-hand region of a QWERTY keyboard (e.g., IJKL, HJ).
 *
 * @returns {JSX.Element}
 */

import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './FidgetRight.css';

const RIGHT_KEYS = [
  'y', 'u', 'i', 'o', 'p',
  'h', 'j', 'k', 'l', ';',
  'b', 'n', 'm', ',', '.'
];

const FidgetRight = () => {
  const [activeKeys, setActiveKeys] = useState({});

  useEffect(() => {
    const handleKeyDown = (e) => {
        const key = e.key === ' ' ? 'Space' : e.key === 'Shift' ? 'Shift' : e.key.toLowerCase();
  
        if (key === 'Space') {
          setActiveKeys({});
        } else if (RIGHT_KEYS.includes(key)) {
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
      <Card.Title>Right Hand Fidget</Card.Title>
      <Card.Text className="fst-italic">Keyboard inputs: right hand keys</Card.Text>
      <div className="bubble-container">
      {[0, 1, 2].map((rowIdx) => (
        <div key={rowIdx} className={`bubble-row ${rowIdx === 1 ? 'offset-row' : ''}`}>
            {RIGHT_KEYS.slice(rowIdx * 5, rowIdx * 5 + 5).map((key, i) => (
            <div
                key={key}
                className={`bubble ${activeKeys[key] ? 'active' : ''} right-color-${rowIdx * 5 + i + 1}`}
            />
            ))}
        </div>
        ))}

      </div>
    </Card>
  );
};

export default FidgetRight;
