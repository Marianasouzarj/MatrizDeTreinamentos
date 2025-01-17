import React from "react";
import Layout from "../components/Layout";

function MatrizTreinamento() {
  return (
    <div>
      <h2>Matriz de Treinamentos</h2>
      <p>Aqui você poderá visualizar a matriz de treinamentos associada aos colaboradores e suas qualificações.</p>
      {/* Substitua a tabela abaixo por dados dinâmicos assim que disponíveis */}
      <table border="1" style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Colaborador</th>
            <th>Treinamento</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>João Silva</td>
            <td>Treinamento de Segurança</td>
            <td>Concluído</td>
          </tr>
          <tr>
            <td>Maria Santos</td>
            <td>Treinamento de Operações</td>
            <td>Pendente</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MatrizTreinamento;
