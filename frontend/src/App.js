import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CadastroColaborador from "./pages/CadastroColaborador";
import CadastroTreinamento from "./pages/CadastroTreinamento";
import MatrizTreinamento from "./pages/MatrizTreinamento";
import Consolida from "./pages/Consolida";

function App() {
  return (
    <Router>
      <Layout> {/* O Layout engloba as rotas para evitar duplicação */}
        <Routes>
          <Route path="/cadastro-colaborador" element={<CadastroColaborador />} />
          <Route path="/cadastro-treinamento" element={<CadastroTreinamento />} />
          <Route path="/matriz" element={<MatrizTreinamento />} />
          <Route path="/consolidacao" element={<Consolida />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
