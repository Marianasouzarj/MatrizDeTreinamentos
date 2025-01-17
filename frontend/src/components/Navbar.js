import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/cjato02.jpg"; // Importando o logotipo
import "./Navbar.css"; // Importando o arquivo de estilos específico

function Navbar() {
  return (
    <nav className="navbar">
      {/* Exibindo o logotipo */}
      <img src={logo} alt="Logotipo" className="navbar-logo" />
      <ul className="navbar-menu">
        <li>
          <Link to="/cadastro-colaborador" className="navbar-link">
            Cadastro Colaborador
          </Link>
        </li>
        <li>
          <Link to="/cadastro-treinamento" className="navbar-link">
            Cadastro Treinamento
          </Link>
        </li>
        <li>
          <Link to="/matriz" className="navbar-link">
            Matriz de Treinamento
          </Link>
        </li>
        <li>
          <Link to="/consolidacao" className="navbar-link">
            Consolidação
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
