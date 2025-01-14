const mongoose = require("mongoose");

const consolidaSchema = new mongoose.Schema({
  local: { type: String, required: true },
  dataConsulta: { type: Date, required: true },
  treinamentos: [
    {
      treinamento: { type: mongoose.Schema.Types.ObjectId, ref: "Treinamento" },
      quantidadeParticipantes: { type: Number, required: true },
      totalCargaHoraria: { type: Number, required: true },
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model("Consolida", consolidaSchema);
