import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import products from '../data/Products.js';
import Image from '../components/atoms/Image.jsx';
import Text from '../components/atoms/Text.jsx';
import Button from '../components/atoms/Button.jsx';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductDetailStyle.css'

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const newImage = "../"+product.image

  if (!product) {
    return (
      <Container className="my-5">
        <h1>Producto no encontrado</h1>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Button variant="success" onClick={() => navigate(`/products`)}>
          Volver
        </Button>
      <Card>
        <Image src={newImage} alt={product.name} className="card-img-top ImgDetail"  />
        <Card.Body>
          <Text variant="h2">{product.name}</Text>
          <Text variant="p">{product.description}</Text>
          <Text variant="h4">${product.price}</Text>
        <Button variant="success" onClick={() => navigate(`/products`)}>
          Añadir al Carrito
        </Button>
        </Card.Body>

      </Card>
    </Container>
  );
}

export default ProductDetail;
