const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const conectarBancoDados = require("./database");

// Configuração do .env
dotenv.config();

// Conectar ao Banco de Dados
conectarBancoDados();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Interpretar JSON

// Rotas
app.get("/", (req, res) => {
  res.send("API em funcionamento");
});

// Importando rotas específicas
app.use("/api/colaboradores", require("./routes/colaboradorRoutes"));
app.use("/api/treinamentos", require("./routes/treinamentoRoutes"));
app.use("/api/matriz", require("./routes/matrizRoutes"));
app.use("/api/consolidacao", require("./routes/consolidacaoRoutes"));

// Porta configurável pelo .env ou padrão
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
