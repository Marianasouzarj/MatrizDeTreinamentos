import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const criarColaborador = (dados) => api.post("/colaboradores", dados);
export const criarTreinamento = (dados) => api.post("/treinamentos", dados);
export const obterMatriz = () => api.get("/matriz");
export const obterConsolidacao = () => api.get("/consolidacao");

export default api;
