import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Image from '../atoms/Image';
import '../../styles/global.css';
import '../../styles/navbar.css';
import Here2 from "../../assets/img/here2.webp"
import { useAuth } from "../context/AuthContex";
import { NavLink, useNavigate } from "react-router-dom";

export default function NavBar() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();


  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <Navbar id="navbar" variant="dark" expand="lg" >
      <Container>
        <Image src={Here2} className="navimg" />
        <Navbar.Brand href="/">La Granjita De Heri</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/products">Productos</Nav.Link>
            <Nav.Link href="/Nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/Blogs">Blog</Nav.Link>
            <Nav.Link href="/contact">Contacto</Nav.Link>
            <Nav.Link href="/Cart">Carrito</Nav.Link>
            {usuario ? (
          <button
            type="button"
            className="navbar-logout-button"
            onClick={() => {
              handleLogout();
            }}
          >
            Desconectar
          </button>
        ) : (
          <NavLink to="/ingresar" onClick={closeGestion}>
            Ingresar
          </NavLink>
        )}
            <Nav.Link href="/CrearUsuario" >Crear Usuario</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


