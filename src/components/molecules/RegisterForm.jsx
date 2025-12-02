import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContex";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contrasena: "",
    confirmarcontrasena: "",
  });

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.contrasena !== formData.confirmarcontrasena) {
      alert("Las contraseñas no coinciden.");
      return;
    }


    try {
      await register({
        nombreUsuario: formData.nombre,
        correo: formData.correo,
        contrasena: formData.contrasena,
      });

      alert("Cuenta creada correctamente.");
      navigate("/");
    } catch (error) {
      alert("Error al registrar usuario. Inténtalo más tarde.");
    }
  };

  return (
    <div className="login-form-wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Crear cuenta</h1>

        <div className="login-form__input-box">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="login-form__input"
          />
          <i className='bx bxs-user'></i>
        </div>

        <div className="login-form__input-box">
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            required
            className="login-form__input"
          />
          <i className='bx bxs-envelope'></i>
        </div>

        <div className="login-form__input-box">
          <input
            type="password"
            name="contrasena"
            placeholder="Contraseña"
            value={formData.contrasena}
            onChange={handleChange}
            required
            className="login-form__input"
          />
          <i className='bx bxs-lock-alt'></i>
        </div>

        <div className="login-form__input-box">
          <input
            type="password"
            name="confirmarcontrasena"
            placeholder="Confirmar contraseña"
            value={formData.confirmarcontrasena}
            onChange={handleChange}
            required
            className="login-form__input"
          />
          <i className='bx bxs-lock-alt'></i>
        </div>

        <button type="submit" className="login-form__button">
          Registrarse
        </button>

        <div className="login-form__register-link">
          <p>
            ¿Ya tienes una cuenta?{" "}
            <Link to="/ingresar">Inicia sesión</Link>
          </p>
        </div>
      </form>
    </div>
  );
}