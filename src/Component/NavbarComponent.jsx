import React from "react";
import { Navbar, Container, Form, Nav, Button } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Container fluid className="sticky-top">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid className="py-2 fs-4 mx-3">
          <Navbar.Brand href="#" className="fs-2 fw-semibold">
            Belajar <span className="text-info fw-bold">Islam.</span>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="">Contact</Nav.Link>
              <Nav.Link href="#" disabled>
                About
              </Nav.Link>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavbarComponent;
