import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import bannerImage from '../assets/banner.jpeg'; // Importa la imagen desde la ruta correcta

const NavB = () => {
    return (
        <Navbar bg="dark" variant='dark'>
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src={bannerImage} // Usa la imagen importada
                        width="120"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#search">Búsqueda</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavB;
