const mongoose = require("mongoose");

const conectarBancoDados = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Conectado ao MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Erro ao conectar ao MongoDB: ${error.message}`);
    process.exit(1); // Encerrar o processo em caso de erro
  }
};

module.exports = conectarBancoDados;
