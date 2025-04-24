import React from 'react';
import { Card } from 'react-bootstrap';
import FeatureDarkMode from './FeatureDarkMode';

const FeaturesMenu = () => (
  <div>
    <Card className="mb-2">
      <FeatureDarkMode />
    </Card>
    
    <Card className="mb-2">
      <Card.Text>Placeholder Feature (to be filled with elements)</Card.Text>
    </Card>

    <Card className="mb-2">
      <Card.Text>Placeholder Feature (to be filled with elements)</Card.Text>
    </Card>
  </div>
);

export default FeaturesMenu;
