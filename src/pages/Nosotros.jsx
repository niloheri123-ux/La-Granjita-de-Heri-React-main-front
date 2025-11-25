import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from '../components/atoms/Image';
import Row from 'react-bootstrap/Row';
import '../styles/nosotros.css';
import Fundador1 from '../assets/img/Fundador1.webp';
import Fundador2 from '../assets/img/Fundador2.webp';
import Fundador3 from '../assets/img/Fundador3.webp';

function Nosotros(){

 return (

    <Container>
        <h2>NOSOTROS</h2>
        <p>La Granjita de Heri es una empresa dedicada a la crianza responsable y 
            comercialización de animales de granja, así como a la venta de productos relacionados con su cuidado. 
            Con sede en las afueras de una zona rural y una sólida presencia en línea a través de su página web oficial, 
            la empresa ofrece una experiencia completa para amantes de los animales, 
            granjeros y familias que buscan incorporar un nuevo animal y mejorar la calidad de uno ya existente.</p>
        <Row>
            <Col xs={2} md={1}>
            <Image  src={Fundador1} className='nosotrosImg'/>
            </Col>
            <Col>
            <h4>Heri Nilo</h4>
            <p4>Heri Nilo es un estudiante de programación el cual realizó las páginas de blogs! </p4>
            </Col>
            
        </Row>
        
        <Row>
            <Col xs={2} md={1}>
            <Image src={Fundador2}  className='nosotrosImg'/>
            </Col>
            <Col>
            <h4>Bastiano Maiolatesi</h4>
            <p4>Bastiano Maiolatesi es un estudiante de programación el cual realizó las páginas de Home, Sobre Nosotros y Contacto!</p4>
            </Col>
        </Row>

        <Row>
            <Col xs={2} md={1}>
            <Image src={Fundador3}  className='nosotrosImg'/>
            </Col>
            <Col>
            <h4>Benjamin Madrid</h4>
            <p4>Benjamin Madrid es un estudiante de programación el cual realizó las páginas de Inicio y registro de usuario!</p4>
            </Col>
        </Row>
     
    </Container>
  );
}


export default Nosotros;
