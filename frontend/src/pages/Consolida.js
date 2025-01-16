import React from "react";

function Consolida() {
  return (
    <div>
      <h2>Consolidação de Treinamentos</h2>
      <p>Aqui você pode visualizar relatórios consolidados sobre os treinamentos realizados.</p>
      {/* Exemplo básico de um relatório consolidado */}
      <table border="1" style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Treinamento</th>
            <th>Total de Participantes</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Treinamento de Segurança</td>
            <td>20</td>
            <td>Concluído</td>
          </tr>
          <tr>
            <td>Treinamento de Operações</td>
            <td>15</td>
            <td>Em Andamento</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Consolida;
