const express = require("express");
const { cadastrarTreinamento, listarTreinamentos } = require("../controllers/treinamentoController");

const router = express.Router();

router.post("/", cadastrarTreinamento);
router.get("/", listarTreinamentos);

module.exports = router;
