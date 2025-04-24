import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const FeatureDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.body.classList.contains('dark-mode')
  );

  const toggleMode = () => {
    document.body.classList.toggle('dark-mode');
    setDarkMode(!darkMode);
  };

  return (
    <Button
      variant={darkMode ? 'light' : 'secondary'}
      onClick={toggleMode}
      className="w-100"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </Button>
  );
};

export default FeatureDarkMode;
