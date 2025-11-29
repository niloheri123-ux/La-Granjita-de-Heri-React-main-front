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
    <div className="productos-page">
      <h1 className="productos-title">Productos</h1>

      <div className="productos-filtro">
        <label htmlFor="categoria-select">Filtrar por categoría:</label>
        <select
          id="categoria-select"
          value={categoriaSeleccionada}
          onChange={handleCategoriaChange}
        >
          <option value="todas">Todas las categorías</option>
          {!cargandoCategorias &&
            categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nombre ?? cat.categoria ?? `Categoría ${cat.id}`}
              </option>
            ))}
        </select>
      </div>

      <div className="productos-grid">
        {cargandoProductos && <p>Cargando productos...</p>}

        {!cargandoProductos && productos.length === 0 && (
          <p>No se encontraron productos para esta categoría.</p>
        )}

        {!cargandoProductos &&
          productos.length > 0 &&
          productos.map((producto) => (
            <div key={producto.id} className="productos-item">
              <ProductCard producto={producto} />
            </div>
          ))}
      </div>
    </div>
  );


  /*
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
  )*/
}