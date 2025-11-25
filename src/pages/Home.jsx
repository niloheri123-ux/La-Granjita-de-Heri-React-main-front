import React from 'react';
import { Container, Button, Card, Row  } from 'react-bootstrap';
import '../styles/global.css';
import '../styles/home.css';
import products from '../data/ProductHome';
import ProductCard from '../components/organisms/ProductCard';
import { useNavigate } from 'react-router-dom';
import Vaca from '../assets/img/R.webp';

function Home() {
    const navigate = useNavigate();
  return (
    <Container className="my-5" id="my-5">
      <Card border="light" style={{ width: '18rm'}} id="largeCard">
        <Card.Img variant="top" src={Vaca} id="LCardImg"/>
        <Card.Body>
          <Card.Title>Tienda Online</Card.Title>
          <Card.Text>
              La Granjita de Heri es una empresa dedicada a la crianza responsable y comercialización de animales de granja, 
              así como a la venta de productos relacionados con su cuidado. Con sede en las afueras de una zona rural y una sólida presencia en línea a través de su página web oficial, 
              la empresa ofrece una experiencia completa para amantes de los animales, granjeros y familias que buscan incorporar un nuevo animal y mejorar la calidad de uno ya existente.
          </Card.Text>
          <Button variant="success" onClick={() => navigate(`/products`)}>Ver Productos</Button>
        </Card.Body>
    </Card>
          <Row >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
}

export default Home;
