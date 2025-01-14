const express = require("express");
const { consolidarDados } = require("../controllers/consolidacaoController");

const router = express.Router();

router.get("/", consolidarDados);

module.exports = router;
