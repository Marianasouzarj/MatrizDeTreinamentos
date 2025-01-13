const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/MatrizDeTreinamentos", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Erro ao conectar no MongoDB: ${error.message}`);
    process.exit(1); // Encerrar o servidor se falhar
  }
};

module.exports = connectDB;
