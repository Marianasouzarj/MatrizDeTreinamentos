const Matriz = require("../models/Matriz");

// Registrar treinamento realizado
const registrarTreinamento = async (req, res) => {
  try {
    const novaMatriz = new Matriz(req.body);
    await novaMatriz.save();
    res.status(201).json({ message: "Treinamento registrado com sucesso!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Buscar matriz de treinamentos com filtros
const buscarTreinamentos = async (req, res) => {
  const { local, dataInicio, dataFim } = req.query;
  
  const filtro = {};
  if (local) filtro.local = local;
  if (dataInicio && dataFim) {
    filtro.dataRealizacao = { $gte: new Date(dataInicio), $lte: new Date(dataFim) };
  }

  try {
    const matriz = await Matriz.find(filtro).populate("treinamento").populate("participantes.colaborador");
    res.status(200).json(matriz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registrarTreinamento, buscarTreinamentos };
