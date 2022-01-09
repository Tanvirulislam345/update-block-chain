import React from "react";
import {
  Button,
  Container,
  Dropdown,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import brandlogo from "../../../Images/brandlogo.png";
import './Navigation.css';
const Navigations = () => {

  const { user, userSignOut } = useFirebase();
  return (
    <div className="App">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ paddingTop: "40px" }}
      >
        <Container >

          <Navbar.Brand href="#home">
            <img src={brandlogo} alt="" width="174px" />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="ms-auto "
              style={{ display: "flex", alignItems: "center" }}
            >
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Marketplace"
                style={{ fontSize: "medium", padding: "0px" }}
                menuVariant="dark"
              >
                <NavDropdown.Item as={Link} to="/popularcomments">
                  <small>Popular items</small>
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/featuredcomments">
                  <small >Featured Assets</small>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={Link}
                to="/nfts"
                style={{ padding: "0px 85px" }}
              >
                <small style={{ color: "#FFFFFF" }}>MyNFTs</small>
              </Nav.Link>
              <Nav.Link href="#video"
              >
                <small style={{ color: "#FFFFFF" }}>Video foods</small>
              </Nav.Link>

              <Nav.Link href="#video" style={{ padding: "0px", paddingLeft: '40px' }}>
                <Button
                  variant="info"
                  size="sm"
                  className="navButton"
                  style={{
                    color: "#FFFFFF",
                    padding: "13px 35px",
                    border: 'none',
                    borderRadius: "4px"
                  }}
                >
                  Use TrApp
                </Button>{" "}
              </Nav.Link>

              <Nav.Link
                href="#"
                style={{ padding: "0px 24px" }}
              >
                <span id="divider1" style={{ borderRight: "1px solid #FFFFFF",  height:'100%' }}>
                </span>
              </Nav.Link>
              {user.email ? <Nav.Link onClick={userSignOut}>
                <small style={{ color: "#FFFFFF" }}>LogOut</small>
              </Nav.Link>
                :
                <Nav>
                  <Nav.Link as={Link} to="/login">
                    <small style={{ color: "#FFFFFF" }}>Sign in</small>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    <small style={{ color: "#FFFFFF" }}>Sign Up</small>
                  </Nav.Link>
                </Nav>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigations;
