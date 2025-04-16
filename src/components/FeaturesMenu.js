import React from 'react';
import { Card } from 'react-bootstrap';

const FeaturesMenu = () => (
  <div>
    <h5>Features Menu</h5>
    {[1, 2, 3].map((feature) => (
      <Card key={feature} className="mb-2 p-2 bg-warning-subtle">
        <Card.Text>Placeholder Feature (to be filled with elements)</Card.Text>
      </Card>
    ))}
  </div>
);

export default FeaturesMenu;