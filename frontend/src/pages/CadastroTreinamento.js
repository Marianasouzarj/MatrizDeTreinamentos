import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

function CadastroTreinamento() {
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    cargaHoraria: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/treinamentos", formData);
      alert("Treinamento cadastrado com sucesso!");
      setFormData({ titulo: "", descricao: "", cargaHoraria: "", status: "" });
    } catch (error) {
      alert("Erro ao cadastrar treinamento!");
    }
  };

  return (
    <div>
      <h2>Cadastro de Treinamento</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={formData.titulo}
          onChange={handleChange}
          required
        />
        <textarea
          name="descricao"
          placeholder="Descrição"
          value={formData.descricao}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="cargaHoraria"
          placeholder="Carga Horária (em horas)"
          value={formData.cargaHoraria}
          onChange={handleChange}
          required
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Selecione o Status</option>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
        </select>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroTreinamento;
