import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";

function Consolida() {
  const [locais, setLocais] = useState([]);
  const [locaisSelecionados, setLocaisSelecionados] = useState([]);
  const [treinamentos, setTreinamentos] = useState([]);
  const [mesAno, setMesAno] = useState("");
  const [resultado, setResultado] = useState(null);
  const [mostrarColaboradores, setMostrarColaboradores] = useState(false);

  useEffect(() => {
    // Carregar lista de locais
    const fetchLocais = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/locais");
        setLocais(response.data);
      } catch (error) {
        console.error("Erro ao buscar locais", error);
      }
    };
    fetchLocais();
  }, []);

  const handleLocalChange = (e) => {
    const value = e.target.value;
    setLocaisSelecionados(
      e.target.checked
        ? [...locaisSelecionados, value]
        : locaisSelecionados.filter((local) => local !== value)
    );
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/consolidacao", {
        locais: locaisSelecionados,
        mesAno,
      });
      setResultado(response.data);
    } catch (error) {
      console.error("Erro ao buscar consolidação", error);
    }
  };

  return (
    <div>
      <h2>Consolidação de Treinamentos</h2>

      <div>
        <h3>Selecione Locais:</h3>
        {locais.map((local) => (
          <label key={local.id}>
            <input
              type="checkbox"
              value={local.nome}
              onChange={handleLocalChange}
            />
            {local.nome}
          </label>
        ))}
      </div>

      <div>
        <h3>Escolha Mês/Ano:</h3>
        <input
          type="month"
          value={mesAno}
          onChange={(e) => setMesAno(e.target.value)}
        />
      </div>

      <button onClick={handleSearch}>Buscar</button>

      {resultado && (
        <div>
          <h3>Resultados</h3>
          <ul>
            {resultado.treinamentos.map((treinamento) => (
              <li key={treinamento.id}>
                {treinamento.nome} - {treinamento.quantidadeColaboradores} colaboradores, {treinamento.totalHH} horas
              </li>
            ))}
          </ul>

          {mostrarColaboradores && (
            <div>
              <h3>Colaboradores</h3>
              <ul>
                {resultado.colaboradores.map((colaborador) => (
                  <li key={colaborador.id}>{colaborador.nome}</li>
                ))}
              </ul>
            </div>
          )}
          <button onClick={() => setMostrarColaboradores(!mostrarColaboradores)}>
            {mostrarColaboradores ? "Ocultar Colaboradores" : "Mostrar Colaboradores"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Consolida;
