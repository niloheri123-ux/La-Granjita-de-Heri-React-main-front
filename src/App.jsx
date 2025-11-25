import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organisms/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Blogs from './pages/Blogs';
import Nosotros from './pages/Nosotros';
import Cart from './pages/Cart';
import InicioSesion from './pages/InicioSesion';
import CrearUsuario from './pages/CrearUsuario';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Blog1" element={<Blog1 />} />
        <Route path="/Blog2" element={<Blog2 />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/InicioSesion" element={<InicioSesion/>} />
        <Route path="/CrearUsuario" element={<CrearUsuario/>} />
      </Routes>
    
    </>
  );
}

export default App;
