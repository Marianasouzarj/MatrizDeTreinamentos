const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Rotas
const colaboradorRoutes = require("./routes/colaboradorRoutes");
const treinamentoRoutes = require("./routes/treinamentoRoutes");
const matrizRoutes = require("./routes/matrizRoutes");
const consolidacaoRoutes = require("./routes/consolidacaoRoutes");

// Inicialização do app
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conectar às rotas
app.use("/api/colaboradores", colaboradorRoutes);
app.use("/api/treinamentos", treinamentoRoutes);
app.use("/api/matriz", matrizRoutes);
app.use("/api/consolidacao", consolidacaoRoutes);

// Porta padrão
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
