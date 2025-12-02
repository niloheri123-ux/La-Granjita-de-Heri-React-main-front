import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Image from "../components/atoms/Image.jsx";
import Text from "../components/atoms/Text.jsx";
import Button from "../components/atoms/Button.jsx";
import CarritoService from "../services/CarritoService";
import "../styles/ProductDetailStyle.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [cargando, setCargando] = useState(true);

  const carritoId = 1; // ⚠️ Más adelante: usar ID real del usuario

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const data = await CarritoService.obtenerProducto(id);
        setProduct(data);
        setCargando(false);
      } catch (error) {
        console.error(error);
        setCargando(false);
      }
    };

    fetchProducto();
  }, [id]);

  const handleAgregar = async () => {
    try {
      const updatedCart = await CarritoService.agregarProducto(carritoId, id);
      alert("Producto agregado al carrito correctamente");
      console.log("Carrito:", updatedCart);
    } catch (error) {
      alert("Error al agregar producto");
      console.error(error);
    }
  };

  if (cargando) return <Container>Cargando producto...</Container>;

  if (!product) {
    return (
      <Container className="my-5">
        <h1>Producto no encontrado</h1>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Button variant="success" onClick={() => navigate("/products")}>
        Volver
      </Button>

      <Card>
        <Image
          src={product.image}
          alt={product.name}
          className="card-img-top ImgDetail"
        />

        <Card.Body>
          <Text variant="h2">{product.name}</Text>
          <Text variant="p">{product.description}</Text>
          <Text variant="h4">${product.price}</Text>

          <Button variant="success" onClick={handleAgregar}>
            Añadir al Carrito
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetail;

