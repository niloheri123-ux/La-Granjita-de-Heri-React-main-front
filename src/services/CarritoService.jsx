const API_CARRITOS = "https://la-granjita-de-heri-back.onrender.com/api/carritos";
const API_PRODUCTOS = "https://la-granjita-de-heri-back.onrender.com/api/productos";

const CarritoService = {
  obtenerProducto: async (id) => {
    const res = await fetch(`${API_PRODUCTOS}/${id}`);
    if (!res.ok) throw new Error("Error obteniendo producto desde el backend");
    return res.json();
  },

  agregarProducto: async (carritoId, productoId) => {
    const res = await fetch(`${API_CARRITOS}/${carritoId}/agregar/${productoId}`, {
      method: "POST",
    });
    if (!res.ok) throw new Error("Error agregando producto al carrito");
    return res.json();
  },
};

export default CarritoService;
