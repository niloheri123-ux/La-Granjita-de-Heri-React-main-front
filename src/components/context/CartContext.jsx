import { createContext, useContext, useState, useEffect } from "react";

// Crear contexto
const CartContext = createContext();

// Hook para consumir el contexto
export const useCart = () => useContext(CartContext);

// Provider
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Cargar carrito desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem("heri_cart");
    if (stored) setItems(JSON.parse(stored));
  }, []);

  // Guardar carrito en localStorage
  useEffect(() => {
    localStorage.setItem("heri_cart", JSON.stringify(items));
  }, [items]);

  // Agregar al carrito
  const addItem = (producto) => {
    setItems((prev) => {
      const existe = prev.find((i) => i.producto.id === producto.id);

      if (existe) {
        return prev.map((i) =>
          i.producto.id === producto.id
            ? { ...i, cantidad: i.cantidad + 1 }
            : i
        );
      }

      return [...prev, { producto, cantidad: 1 }];
    });
  };

  // Actualizar cantidad
  const updateQuantity = (productoId, cantidad) => {
    setItems((prev) =>
      prev.map((i) =>
        i.producto.id === productoId
          ? { ...i, cantidad }
          : i
      )
    );
  };

  // Eliminar un producto del carrito
  const removeFromCart = (productoId) => {
    setItems((prev) => prev.filter((i) => i.producto.id !== productoId));
  };

  // Vaciar carrito
  const clearCart = () => setItems([]);

  // Total del carrito
  const totalPrecio = items.reduce(
    (acc, item) => acc + item.producto.precio * item.cantidad,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalPrecio,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;