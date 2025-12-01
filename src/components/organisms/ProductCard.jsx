import React from 'react';
import { Card } from 'react-bootstrap';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import CardBody from '../molecules/CardBody';
import { useNavigate } from 'react-router-dom';
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const { addItem } = useCart(); 

  const newImage = "../" + product.image;

  return (
    <Card style={{ width: '18rem' }} className="m-2">
      <Image src={newImage} alt={product.name} className="card-img-top" />

      <Card.Body>
        <CardBody
          title={product.name}
          description={product.description}
          price={product.price}
        />

        <Button variant="success">
          Ver detalles
        </Button>

        <Button 
          variant="primary"
          onClick={() => addItem(product)}  
          style={{ marginTop: "10px" }}
        >
          Agregar al carrito
        </Button>

      </Card.Body>
    </Card>
  );
}

export default ProductCard;
