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
      await axios.post("http://localhost:5000/api/colaboradores", formData);
      alert("Colaborador cadastrado com sucesso!");
      setFormData({
        nome: "",
        matricula: "",
        funcao: "",
        status: "",
        empresa: "",
      });
    } catch (error) {
      alert("Erro ao cadastrar colaborador!");
    }
  };

  return (
    <div>
      <h2>Cadastro de Colaborador</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos do formulário */}
      </form>
    </div>
  );
}

export default CadastroColaborador;
