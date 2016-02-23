import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown
} from 'react-bootstrap';

// Navbar docs:
// https://react-bootstrap.github.io/components.html#navbars

const AAANavBar = ({  }) => {
  return (
    <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Away And Away / S.C. Barrus</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Books</NavItem>
        <NavItem eventKey={2} href="#">About S.C. Barrus</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default AAANavBar;