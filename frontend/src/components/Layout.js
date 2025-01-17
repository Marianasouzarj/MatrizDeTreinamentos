import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/cjato02.png";

function Layout({ children }) {
  return (
    <div className="layout-container">
      {/* Cabeçalho */}
      <header className="layout-header">
        <div className="logo-container">
          <img src={logo} alt="Logotipo" className="logo" />
        </div>
        <nav className="layout-nav">
          <Link to="/cadastro-colaborador">Cadastro de Colaboradores</Link>
          <Link to="/cadastro-treinamento">Cadastro de Treinamentos</Link>
          <Link to="/matriz">Matriz de Treinamento</Link>
          <Link to="/consolidacao">Consolidação</Link>
        </nav>
      </header>

      {/* Título principal */}
      <h1 className="layout-title">Matriz de Treinamento</h1>

      {/* Conteúdo principal */}
      <main className="layout-content">{children}</main>

      {/* Rodapé */}
      <footer className="layout-footer">
        Desenvolvido por <strong>Mariana Souza</strong>
      </footer>
    </div>
  );
}

export default Layout;
