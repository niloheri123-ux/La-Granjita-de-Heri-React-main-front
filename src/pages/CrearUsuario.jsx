import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from '../components/atoms/Button.jsx'; 
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';

function CrearUsuario() {
    const navigate = useNavigate();
    return (
    <Container>
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" placeholder="Usuario" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="success" type="submit" onClick={() => navigate(`/`)}>
            Crear Usuario
        </Button>
        </Form>
    </Container>
  );
}

export default CrearUsuario;