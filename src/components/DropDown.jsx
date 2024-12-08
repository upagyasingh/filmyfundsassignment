import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function DropDown({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div >
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction} >
        <DropdownToggle caret color='primary'>+91</DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem header>+91</DropdownItem>
          <DropdownItem>+91</DropdownItem>
          <DropdownItem>+91</DropdownItem>
          <DropdownItem>+91</DropdownItem>
          <DropdownItem>+91</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default DropDown;