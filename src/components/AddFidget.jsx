/**
 * Renders a dropdown menu for adding fidgets to the board.
 *
 * @param {Object} props
 * @param {Function} props.addFidget - Function to add a selected fidget component
 * @returns {JSX.Element}
 */

import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import FidgetArrow from './FidgetArrow';
import FidgetLeft from './FidgetLeft';
import FidgetRight from './FidgetRight';
import FidgetScrollBall from './FidgetScrollBall'

const AddFidget = ({ addFidget }) => {
  return (
    <DropdownButton title="Add a Fidget" variant="success" className="">
      <Dropdown.Item onClick={() => addFidget(FidgetArrow)}>Arrow Key Fidget</Dropdown.Item>
      <Dropdown.Item onClick={() => addFidget(FidgetLeft)}>Left Hand Fidget</Dropdown.Item>
      <Dropdown.Item onClick={() => addFidget(FidgetRight)}>Right Hand Fidget</Dropdown.Item>
      <Dropdown.Item onClick={() => addFidget(FidgetScrollBall)}>ScrollBall Fidget</Dropdown.Item>
    </DropdownButton>
  );
};

export default AddFidget;