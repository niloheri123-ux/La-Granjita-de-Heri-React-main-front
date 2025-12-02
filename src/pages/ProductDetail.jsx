import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Image from "../components/atoms/Image";
import Text from "../components/atoms/Text";
import Button from "../components/atoms/Button";
import CartService from "../services/CartService";
import "../styles/ProductDetailStyle.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [cargando, setCargando] = useState(true);

  const carritoId = 1; // ← usarás el carrito real cuando implementes usuarios

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const data = await CartService.obtenerProducto(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setCargando(false);
      }
    };

    fetchProducto();
  }, [id]);

  const handleAgregarCarrito = async () => {
    try {
      await CartService.agregarProducto(carritoId, id);
      alert("Producto agregado al carrito");
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
      alert("No se pudo agregar al carrito");
    }
  };

  if (cargando) return <Container>Cargando...</Container>;

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

          <Button variant="success" onClick={handleAgregarCarrito}>
            Añadir al Carrito
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetail;
