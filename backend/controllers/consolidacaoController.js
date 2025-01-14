const Consolida = require("../models/Consolida");

// Consolidação de dados por filtros
const consolidarDados = async (req, res) => {
  const { local, dataConsulta } = req.query;

  try {
    const consolidacao = await Consolida.find({ local, dataConsulta }).populate("treinamentos.treinamento");
    res.status(200).json(consolidacao);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { consolidarDados };
