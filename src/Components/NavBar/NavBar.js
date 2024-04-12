import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch,} from "@fortawesome/free-solid-svg-icons"
import Logo from "../../IMG/Logo.png";

function NavBar() {
    return (
        <Navbar expand="lg" className="nav  bg sticky-top  ">
        <Container    className='text-center d-flex   '>
            <Navbar.Brand href="/">
                <img alt='' src={Logo}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav " />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                
                <Link to="/"  className='nav-link'>Home</Link>

                <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Our Team
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Faq's</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                    Booking
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                    Eroor 404
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                    Login /Register
                </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Service
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Service Details</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Blog Details
                </NavDropdown.Item>
                </NavDropdown>

                <Link to="/ContactPage">
                <Nav.Link href="#contact">CotactUs</Nav.Link>
                </Link>
                <Nav.Link >Search</Nav.Link>
                <Nav.Link >PhoneIcon </Nav.Link>
                <Nav.Link style={{fontWeight:"bold"}}>(+01)999888777</Nav.Link>
                <Nav.Link ><button>Contact Us <span><FontAwesomeIcon icon={faSearch} /></span></button></Nav.Link>

            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar;