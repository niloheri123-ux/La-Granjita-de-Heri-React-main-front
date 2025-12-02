import { useState, useEffect } from "react";
import "../styles/global.css";
import { useCart } from "../components/context/CartContext";
import Button from "../components/atoms/Button";
import CartService from "../services/CartService";

export default function Cart() {
  const {
    items,
    totalPrecio,
    updateQuantity,
    removeFromCart,
    clearCart,
    setCart,
  } = useCart();

  const [carritoId, setCarritoId] = useState(1); // ⚠️ Luego se obtiene del usuario logueado
  const [mostrandoConfirmacion, setMostrandoConfirmacion] = useState(false);
  const [procesandoCompra, setProcesandoCompra] = useState(false);

  // 🔄 Cargar carrito real de la BD
  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await CartService.obtenerCarrito(carritoId);
        setCart(data.productos); // sincroniza carrito local con BD
      } catch (e) {
        console.error("Error cargando carrito", e);
      }
    };

    cargar();
  }, [carritoId]);


  const handleCambiarCantidad = (productoId, nuevaCantidad) => {
    const valor = parseInt(nuevaCantidad, 10);
    if (isNaN(valor) || valor <= 0) return;
    updateQuantity(productoId, valor);
  };

  const handleEliminar = (productoId) => {
    removeFromCart(productoId);
  };

  const handleVaciar = async () => {
    if (items.length === 0) return;
    if (!window.confirm("¿Seguro que deseas vaciar el carrito?")) return;

    await CartService.vaciarCarrito(carritoId);
    clearCart();
  };

  const handleFinalizarCompraClick = () => {
    if (items.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    setMostrandoConfirmacion(true);
  };

  const handleConfirmarCompra = async () => {
    try {
      setProcesandoCompra(true);

      // 🔥 Aquí se envía la compra a la BD (como el otro carrito)
      await fetch("http://localhost:8080/api/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          total: totalPrecio,
          carritoId,
        }),
      });

      // limpiar carrito backend
      await CartService.vaciarCarrito(carritoId);

      clearCart();
      setMostrandoConfirmacion(false);
      alert("Compra realizada exitosamente.");
    } catch (e) {
      alert("Error procesando la compra.");
      console.error(e);
    } finally {
      setProcesandoCompra(false);
    }
  };

  const handleCancelarCompra = () => {
    setMostrandoConfirmacion(false);
  };

  return (
    <div className="carrito-page">
      <h1>Tu carrito</h1>

      {items.length === 0 ? (
        <p>No tienes productos en el carrito.</p>
      ) : (
        <>
          <div className="carrito-lista">
            {items.map((item) => (
              <div key={item.producto.id} className="carrito-item">
                <div className="carrito-item-info">
                  <h3>{item.producto.nombre}</h3>
                  <p>Precio unitario: ${item.producto.precio}</p>
                </div>

                <div className="carrito-item-controles">
                  <label>
                    Cantidad:
                    <input
                      type="number"
                      min="1"
                      value={item.cantidad}
                      onChange={(e) =>
                        handleCambiarCantidad(item.producto.id, e.target.value)
                      }
                    />
                  </label>

                  <Button
                    className="carrito-btn carrito-btn-eliminar"
                    onClick={() => handleEliminar(item.producto.id)}
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="carrito-resumen">
            <p>Total: ${totalPrecio}</p>

            <div className="carrito-acciones">
              <Button
                className="carrito-btn carrito-btn-vaciar"
                onClick={handleVaciar}
              >
                Vaciar carrito
              </Button>

              <Button
                className="carrito-btn carrito-btn-comprar"
                onClick={handleFinalizarCompraClick}
              >
                Finalizar compra
              </Button>
            </div>
          </div>
        </>
      )}

      {mostrandoConfirmacion && (
        <div className="carrito-modal-backdrop">
          <div className="carrito-modal">
            <h2>Confirmar compra</h2>
            <p>¿Confirmas la compra por un total de ${totalPrecio}?</p>

            <div className="carrito-modal-acciones">
              <Button
                className="carrito-btn carrito-btn-cancelar"
                onClick={handleCancelarCompra}
                disabled={procesandoCompra}
              >
                Cancelar
              </Button>

              <Button
                className="carrito-btn carrito-btn-confirmar"
                onClick={handleConfirmarCompra}
                disabled={procesandoCompra}
              >
                {procesandoCompra ? "Procesando..." : "Confirmar compra"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
