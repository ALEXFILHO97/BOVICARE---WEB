import React from 'react';
import { FaHome, FaUser, FaBell, FaPlus, FaMapMarkedAlt, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="/logo.svg" alt="BoviCare Logo" className="logo-img" />
        <span className="logo-text">BoviCare</span>
      </div>

      <div className="navbar-section">
        <div className="navbar-section-title">Navegação</div>
        <ul className="navbar-menu">
          <li>
            <NavLink to="/home" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              <FaHome /> Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              <FaUser /> Perfil
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-section">
        <div className="navbar-section-title">Funcionalidades</div>
        <ul className="navbar-menu">
          <li>
            <NavLink to="/rastreamento" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              <FaMapMarkedAlt /> Rastreamento
            </NavLink>
          </li>
          <li>
            <NavLink to="/alertas" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              <FaBell /> Alertas e Avisos
            </NavLink>
          </li>
          <li>
            <NavLink to="/criar-fazenda" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              <FaPlus /> Criar Fazenda
            </NavLink>
          </li>
          <li>
            <NavLink to="/cadastrar-gado" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              <FaPlus /> Cadastrar Gado
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="bottom-link">
        <ul className="navbar-menu">
          <li>
            <NavLink to="/logout" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              <FaSignOutAlt /> Sair
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
