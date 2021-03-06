import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Tashiil</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Charts</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header
