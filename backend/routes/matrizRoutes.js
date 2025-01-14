const express = require("express");
const { registrarTreinamento, buscarTreinamentos } = require("../controllers/matrizController");

const router = express.Router();

router.post("/", registrarTreinamento);
router.get("/", buscarTreinamentos);

module.exports = router;
