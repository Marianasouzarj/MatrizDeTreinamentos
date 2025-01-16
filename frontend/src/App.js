import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CadastroColaborador from "./pages/CadastroColaborador";
import CadastroTreinamento from "./pages/CadastroTreinamento";
import MatrizTreinamento from "./pages/MatrizTreinamento";
import Consolida from "./pages/Consolida";

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Matriz de Treinamento</h1>
          {/* Menu de navegação */}
          <nav>
            <ul>
              <li>
                <Link to="/matriz">Matriz de Treinamento</Link>
              </li>
              <li>
                <Link to="/cadastro-colaborador">Cadastro de Colaborador</Link>
              </li>
              <li>
                <Link to="/cadastro-treinamento">Cadastro de Treinamento</Link>
              </li>
              <li>
                <Link to="/consolidacao">Consolidação</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Definição das rotas */}
        <Routes>
          <Route path="/" element={<MatrizTreinamento />} />
          <Route path="/cadastro-colaborador" element={<CadastroColaborador />} />
          <Route path="/cadastro-treinamento" element={<CadastroTreinamento />} />
          <Route path="/matriz" element={<MatrizTreinamento />} />
          <Route path="/consolidacao" element={<Consolida />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


