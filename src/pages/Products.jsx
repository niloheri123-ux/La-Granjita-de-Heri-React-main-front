import React from 'react';
import { Container, Row } from 'react-bootstrap';
import products from '../data/Products';
import ProductCard from '../components/organisms/ProductCard';

import ProductoService from "../services/ProductoService";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargandoProductos, setCargandoProductos] = useState(true)

  useEffect(() => {
    const cargarProductos = async () => {
      setCargandoProductos(true);

      let data = [];
      if (categoriaSeleccionada === "todas") {
        data = await ProductoService.getAll();
      } 
      setProductos(data || []);
      setCargandoProductos(false);
    };

    cargarProductos();
  });

  return (
    <Container className="my-5">
      <h1>Productos</h1>
      <Row >
        {!cargandoProductos &&
          productos.length > 0 &&
          productos.map((producto)=> (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </Row>
    </Container>
  )
}