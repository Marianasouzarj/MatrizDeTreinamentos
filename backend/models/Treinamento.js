const mongoose = require("mongoose");

const treinamentoSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true },
  categoria: { 
    type: String, 
    enum: ["Qualidade", "Saúde", "Meio Ambiente", "Segurança", "Outro"], 
    required: true 
  },
  conteudoProgramatico: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Treinamento", treinamentoSchema);
