import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Matriz de Treinamento</Link>
        </li>
        <li>
          <Link to="/cadastro-colaborador">Cadastro de Colaboradores</Link>
        </li>
        <li>
          <Link to="/cadastro-treinamento">Cadastro de Treinamentos</Link>
        </li>
        <li>
          <Link to="/consolida-treinamento">Consolidação de Treinamentos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
