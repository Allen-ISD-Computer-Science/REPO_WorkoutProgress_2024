import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';



function Test() {
  return (
    <>
      {[false, ].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
            <Container fluid>
		<center>
		    <Image src="https://raw.githubusercontent.com/Allen-ISD-Computer-Science/REPO_WorkoutProgress_2024/development/frontend/src/images/Logo.png"/>
		    </center> 
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Image src="https://raw.githubusercontent.com/Allen-ISD-Computer-Science/REPO_WorkoutProgress_2024/development/frontend/src/images/Logo.png" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
		      
                  <Nav.Link href='./Welcome'>Home</Nav.Link>
                    <Nav.Link href='./about_us'>About Us</Nav.Link>
		    <Nav.Link href='./diets'>Diets</Nav.Link>
		    <Nav.Link href='./workouts'>Workouts</Nav.Link>
		    <Nav.Link href='./list'>List</Nav.Link>
		    <Nav.Link href='./register'>Register</Nav.Link>
		    
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Test
