import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

import './NavBar.css';

const NabBar = () => {
    const [loggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handleLogOut = () => {
        localStorage.clear();
        history.go(0);
    }
    
    return (
            <Navbar bg="dark" expand="lg" className="py-4 header-text">
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor:"white"}} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Link to="/blogs" className="navBar-link">Blogs</Link>
                        <Link to="/admin/addBlog" className="navBar-link">Admin</Link>
                    <Link to="#" className="navBar-link">Shop</Link>
                    <Link to="#" className="navBar-link">New</Link>
                        <Link to="#" className="navBar-link">About US</Link>
                        {/* {
                            loggedInUser.email ?
                                <Button className="navBar-button" onClick={handleLogOut}>Logout</Button>
                                :
                                <Link to="/login">
                                    <Button className="navBar-button">Login</Button>
                                </Link>
                        } */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        
    );
};

export default NabBar;