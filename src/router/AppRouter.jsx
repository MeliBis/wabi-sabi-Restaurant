import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  //NavLink,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import Contact from "../pages/ContactPage.jsx";
import Menu from "../pages/MenuPages";
import OrdenPage from "../pages/OrdenPage.jsx";
import Whish from "../pages/WishPage.jsx";
import Cuenta from "../pages/AccountPage.jsx";
import Inicio from "../pages/InicioDeSesionPage.jsx";
import Registro from "../pages/RegistroPage.jsx";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orden" element={<OrdenPage />} />
          <Route path="/deseos" element={<Whish />} />
          <Route path="/perfil" element={<Cuenta />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/registro" element={<Registro />} />

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
