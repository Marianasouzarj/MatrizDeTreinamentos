import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CadastroColaborador from "./pages/CadastroColaborador";
import CadastroTreinamento from "./pages/CadastroTreinamento";
import MatrizTreinamento from "./pages/MatrizTreinamento";
import Consolida from "./pages/Consolida";

function App() {
  return (
    <Router>
      <div>
        <h1>Matriz de Treinamento</h1>
        <Routes>
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

