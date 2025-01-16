import React, { useState } from "react";
import axios from "axios";

function CadastroColaborador() {
  const [formData, setFormData] = useState({
    nome: "",
    matricula: "",
    funcao: "",
    status: "",
    empresa: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/colaboradores", formData);
      alert("Colaborador cadastrado com sucesso!");
      setFormData({ nome: "", matricula: "", funcao: "", status: "", empresa: "" });
    } catch (error) {
      alert("Erro ao cadastrar colaborador!");
    }
  };

  return (
    <div>
      <h2>Cadastro de Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="matricula"
          placeholder="Matrícula"
          value={formData.matricula}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="funcao"
          placeholder="Função"
          value={formData.funcao}
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
          <option value="Transferido">Transferido</option>
          <option value="Demitido">Demitido</option>
        </select>
        <input
          type="text"
          name="empresa"
          placeholder="Empresa"
          value={formData.empresa}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroColaborador;
