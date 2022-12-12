import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

import "./Header.css"
const Header = () => {


    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }

    return (


        <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img height={70} src="https://i.ibb.co/hBkDVR6/3-logo.png" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle className='text-dark' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='text-dark' id="responsive-navbar-nav">
                    <Nav className="mx-auto ">

                        <Nav.Link className='text-light' as={Link} to="home">Home</Nav.Link>
                        <Nav.Link className='text-light' as={Link} to="donate">Donate</Nav.Link>
                        <Nav.Link className='text-light' as={Link} to="scolar">Scolar</Nav.Link>


                        {
                            user && <>
                                <Nav.Link className='text-light' as={Link} to="allevent">All Event</Nav.Link>

                                <Nav.Link className='text-light' as={Link} to="addevent">Add Event</Nav.Link>


                                <Nav.Link className='text-light' as={Link} to="addcampaign">Add Campaign</Nav.Link>
                            </>
                        }
                    </Nav>
                    <Nav>
                        {
                            user ?
                                <button className='text-light btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Log Out</button>
                                :

                                <Nav.Link className='text-light' as={Link} to="login">
                                    Login
                                </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;