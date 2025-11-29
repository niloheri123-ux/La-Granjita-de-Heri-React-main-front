import axios from "axios";

const API_URL = "https://la-granjita-de-heri-back.onrender.com/api/productos";

const ProductoService = {
  getAll: async () => {
    try {
      const res = await axios.get(API_URL);
      return res.data;
    } catch (error) {
      console.error("Error al obtener productos:", error);
      return [];
    }
  },


  getById: async (id) => {
    try {
      const res = await axios.get(`${API_URL}/${id}`);
      return res.data;
    } catch (error) {
      console.error("Error al obtener producto por id:", error);
      return null;
    }
  },

  // ---------- ADMIN ----------

};

export default ProductoService;