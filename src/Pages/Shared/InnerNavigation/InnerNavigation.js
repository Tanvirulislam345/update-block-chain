import React from "react";
import {
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import brandlogo from "../../../Images/brandlogo.png";

const InnerNavigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#FFFFFF"}}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={brandlogo} alt="" width="174px" height="48px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav >
            <Nav.Link href="#features"  className="my-auto">
            <input type="text" style={{borderRadius: '4px', backgroundColor: '#F9F9FB', width: '360px', height: '48px', border: '1px solid gray'}} />
            </Nav.Link>
            <Nav.Link href="#deets">
                <Button style={{width: '150px', margin: '0px', height: '48px', backgroundColor: '#FFFFFF', color: '#A8BDD7', border: '1px solid black' }}>Create NFT</Button>
            </Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link
                href="#"
                style={{ padding: "0px 24px", margin: 'auto' }}
              >
                <span id="divider2" style={{ borderRight: "1px solid black", height: "50px" }}>
                </span>
              </Nav.Link>
          <Nav.Link href="#deets"  className="my-auto">
          <img src="#" alt="hello" width="100px" style={{borderRadius: '2px solid red', color: 'white', margin: 'auto'}} />
            </Nav.Link>
            <Nav.Link href="#deets">
                <Button size="sm" style={{width: '150px', margin: '0px', backgroundColor: '#1F5597', fontWeight: 'bold' }}>Connect wallet</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default InnerNavigation;
