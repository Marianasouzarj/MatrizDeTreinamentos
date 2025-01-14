const mongoose = require("mongoose");

const matrizSchema = new mongoose.Schema({
  treinamento: { type: mongoose.Schema.Types.ObjectId, ref: "Treinamento", required: true },
  dataRealizacao: { type: Date, required: true },
  local: { type: String, required: true },
  cargaHoraria: { type: Number, required: true }, // Carga em horas
  participantes: [
    {
      colaborador: { type: mongoose.Schema.Types.ObjectId, ref: "Colaborador", required: true },
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model("Matriz", matrizSchema);
