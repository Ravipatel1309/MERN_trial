import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

function AppNavbar() {
    const [isMobile, setIsMobile] = useState(false);

    const handleClick = () => {
        setIsMobile(!isMobile);
    };

    return (
        <Navbar bg="dark" expand="md">
            <Navbar.Brand>
                <NavLink exact to="/" className="navbar-title">
                    UserInfo
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleClick}>
                <i className={`fas fa-${isMobile ? 'times' : 'bars'}`}></i>
            </Navbar.Toggle>
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Nav.Link exact to="/add" as={NavLink} onClick={handleClick}>
                        Add User
                    </Nav.Link>
                    <Nav.Link exact to="/all" as={NavLink} onClick={handleClick}>
                        All Users
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default AppNavbar;
