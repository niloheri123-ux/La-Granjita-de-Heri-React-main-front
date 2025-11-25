import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from '../components/atoms/Button.jsx'; 
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';

function InicioSesion() {
    const navigate = useNavigate();
    return (    
    <Container>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            Nunca compartiremos tu mail con alguien más.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recuerdame" />
        </Form.Group>
        <Button variant="success" type="submit" onClick={() => navigate(`/`)}>
            Iniciar Sesion
        </Button>
        </Form>
    </Container>
    );
}

export default InicioSesion;