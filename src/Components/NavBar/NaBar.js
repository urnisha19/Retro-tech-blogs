import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../App';
import './NavBar.css';

const NabBar = () => {
    const [loggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handleLogOut = () => {
        localStorage.clear();
        history.go(0);
    }
    
    return (
        <Container>
            <Navbar bg="***" expand="lg" className="py-4">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/home" className="navBar-link">Blogs</Link>
                        <Link to="/admin/orderList" className="navBar-link">Admin</Link>
                        {
                            loggedInUser.email ?
                                <Button className="navBar-button" onClick={handleLogOut}>Logout</Button>
                                :
                                <Link to="/login">
                                    <Button className="navBar-button">Login</Button>
                                </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container >
    );
};

export default NabBar;