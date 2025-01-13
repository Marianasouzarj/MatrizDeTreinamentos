const express = require("express");
const { cadastrarColaborador, listarColaboradores } = require("../controllers/colaboradorController");

const router = express.Router();

router.post("/", cadastrarColaborador);
router.get("/", listarColaboradores);

module.exports = router;
