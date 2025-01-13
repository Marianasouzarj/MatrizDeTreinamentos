const mongoose = require("mongoose");

const colaboradorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  matricula: { type: Number, required: true, unique: true },
  funcao: { type: String, required: true },
  status: { type: String, enum: ["Ativo", "Transferido", "Demitido"], required: true },
  empresa: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Colaborador", colaboradorSchema);
