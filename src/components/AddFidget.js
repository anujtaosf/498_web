import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import FidgetArrow from './FidgetArrow';
import Fidget2 from './Fidget2';

const AddFidget = ({ addFidget }) => {
  return (
    <DropdownButton title="Add a Fidget" variant="success" className="">
      <Dropdown.Item onClick={() => addFidget(FidgetArrow)}>Fidget 1 - Button Clicker</Dropdown.Item>
      <Dropdown.Item onClick={() => addFidget(Fidget2)}>Fidget 2 - Spinner</Dropdown.Item>
    </DropdownButton>
  );
};

export default AddFidget;