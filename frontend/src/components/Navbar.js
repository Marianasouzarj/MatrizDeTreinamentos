import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/cjato02.png"; // Importando o logotipo

function Navbar() {
  return (
    <nav style={styles.nav}>
      {/* Exibindo o logotipo */}
      <img src={logo} alt="Logotipo" style={styles.logo} />
      <ul style={styles.menu}>
        <li>
          <Link to="/cadastro-colaborador" style={styles.link}>
            Cadastro Colaborador
          </Link>
        </li>
        <li>
          <Link to="/cadastro-treinamento" style={styles.link}>
            Cadastro Treinamento
          </Link>
        </li>
        <li>
          <Link to="/matriz" style={styles.link}>
            Matriz de Treinamento
          </Link>
        </li>
        <li>
          <Link to="/consolidacao" style={styles.link}>
            Consolidação
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#003366", // Azul escuro
    padding: "10px 20px",
    color: "white",
  },
  logo: {
    height: "50px", // Tamanho do logotipo
  },
  menu: {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    gap: "15px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
  },
