const Colaborador = require("../models/Colaborador");

// Cadastrar novo colaborador
const cadastrarColaborador = async (req, res) => {
  try {
    const novoColaborador = new Colaborador(req.body);
    await novoColaborador.save();
    res.status(201).json({ message: "Colaborador cadastrado com sucesso!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Listar colaboradores
const listarColaboradores = async (req, res) => {
  try {
    const colaboradores = await Colaborador.find();
    res.status(200).json(colaboradores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { cadastrarColaborador, listarColaboradores };
