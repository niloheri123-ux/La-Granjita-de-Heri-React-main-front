import { useNavigate } from "react-router-dom";
import "../../styles/ProductCard.css";


export default function ProductCard({ producto }) {
  const navigate = useNavigate();

  if (!producto) return null;
  const { id, nombre, precio } = producto;
  const handleVerDetalle = () => {
    navigate(`/producto/${id}`);
  };

  return (
    <article className="product-card">
      {imagenUrl && (
        <img
          className="product-card-image"
          src={imagenUrl}
          alt={nombre}
        />
      )}

      <div className="product-card-info">
        <h3>{nombre}</h3>
        <p>${Number(precio ?? 0).toLocaleString("es-CL")}</p>

        <div className="product-card-actions">
          <button
            type="button"
            className="btn-detalle"
            onClick={handleVerDetalle}
          >
            Ver detalle
          </button>
          <button
            type="button"
            className="btn-carrito"
            onClick={handleAgregarCarrito}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </article>
  );
}