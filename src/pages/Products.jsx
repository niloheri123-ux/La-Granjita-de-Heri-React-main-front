import React from 'react';
import { useEffect, useState } from "react";
import { Container, Row } from 'react-bootstrap';
import "../styles/Productos.css";

import ProductCard2 from "../components/molecules/ProductCard2";
import ProductoService from "../services/ProductoService";


export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargandoProductos, setCargandoProductos] = useState(true)

  useEffect(() => {
    const cargarProductos = async () => {
      setCargandoProductos(true);

      const data = await ProductoService.getAll();
      setProductos(data || []);
      setCargandoProductos(false);
    };

    cargarProductos();
  },[]);

  return (
    <div className="productos-page">
      <h1 className="productos-title">Productos</h1>
      <div className="productos-grid">

        {cargandoProductos && <p>Cargando productos...</p>}
        {!cargandoProductos &&
          productos.length > 0 &&
          productos.map((producto) => (
            <div key={producto.id} className="productos-item">
              <ProductCard2 producto={producto} />
            </div>
          ))}
      </div>
    </div>
  );

}
