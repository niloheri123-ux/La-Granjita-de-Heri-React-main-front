import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Image from "../components/atoms/Image.jsx";
import Text from "../components/atoms/Text.jsx";
import Button from "../components/atoms/Button.jsx";
import "../styles/ProductDetailStyle.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 1) Cargar producto desde BACKEND
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/productos/${id}`);
        if (!res.ok) throw new Error("No encontrado");

        const data = await res.json();
        setProduct(data);
      } catch (error) {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // 🔥 2) Mostrar mientras carga
  if (loading) {
    return (
      <Container className="my-5">
        <h2>Cargando producto...</h2>
      </Container>
    );
  }

  // 🔥 3) Si NO existe el producto
  if (!product) {
    return (
      <Container className="my-5">
        <h1>Producto no encontrado</h1>
      </Container>
    );
  }

  // 🔥 4) Llamar al backend para agregar al carrito
  const agregarAlCarrito = async () => {
    const carritoId = 1; // ⚠️ usa el carrito real del usuario luego

    const response = await fetch(
      `http://localhost:8080/api/carritos/${carritoId}/agregar/${product.id}`,
      { method: "POST" }
    );

    if (!response.ok) {
      alert("Error al agregar al carrito");
      return;
    }

    alert("Producto añadido al carrito!");
  };

  return (
    <Container className="my-5">
      <Button variant="success" onClick={() => navigate(`/products`)}>
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

          <Button variant="success" onClick={agregarAlCarrito}>
            Añadir al Carrito
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetail;
