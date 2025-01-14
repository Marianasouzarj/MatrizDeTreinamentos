const Treinamento = require("../models/Treinamento");

// Cadastrar novo treinamento
const cadastrarTreinamento = async (req, res) => {
  try {
    const novoTreinamento = new Treinamento(req.body);
    await novoTreinamento.save();
    res.status(201).json({ message: "Treinamento cadastrado com sucesso!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Listar treinamentos
const listarTreinamentos = async (req, res) => {
  try {
    const treinamentos = await Treinamento.find();
    res.status(200).json(treinamentos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { cadastrarTreinamento, listarTreinamentos };
