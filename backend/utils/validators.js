/**
 * Verifica se todos os campos obrigatórios estão presentes e não são nulos ou vazios.
 * @param {Object} fields - Objeto contendo os campos a serem validados.
 * @param {Array<string>} requiredFields - Array de strings com os nomes dos campos obrigatórios.
 * @returns {Array<string>} - Lista de erros, vazia se não houver problemas.
 */
const validarCamposObrigatorios = (fields, requiredFields) => {
    const erros = [];
    requiredFields.forEach((campo) => {
      if (!fields[campo] || fields[campo].toString().trim() === "") {
        erros.push(`O campo '${campo}' é obrigatório.`);
      }
    });
    return erros;
  };
  
  /**
   * Verifica se um valor é um ID válido para o MongoDB.
   * @param {string} id - Valor a ser validado como ObjectId.
   * @returns {boolean} - Verdadeiro se for um ID válido.
   */
  const isValidObjectId = (id) => {
    const regex = /^[0-9a-fA-F]{24}$/;
    return regex.test(id);
  };
  
  /**
   * Validações para cadastro de um colaborador.
   * @param {Object} colaborador - Dados do colaborador a serem validados.
   * @returns {Array<string>} - Lista de erros, vazia se os dados forem válidos.
   */
  const validarColaborador = (colaborador) => {
    const requiredFields = ["nome", "matricula", "funcao", "status", "empresa"];
    const erros = validarCamposObrigatorios(colaborador, requiredFields);
  
    if (colaborador.matricula && isNaN(Number(colaborador.matricula))) {
      erros.push("A matrícula deve ser um número.");
    }
  
    return erros;
  };
  
  /**
   * Validações para cadastro de um treinamento.
   * @param {Object} treinamento - Dados do treinamento a serem validados.
   * @returns {Array<string>} - Lista de erros, vazia se os dados forem válidos.
   */
  const validarTreinamento = (treinamento) => {
    const requiredFields = ["nome", "categoria", "conteudoProgramatico"];
    return validarCamposObrigatorios(treinamento, requiredFields);
  };
  
  /**
   * Validações para registro na matriz de treinamentos.
   * @param {Object} matriz - Dados da matriz a serem validados.
   * @returns {Array<string>} - Lista de erros, vazia se os dados forem válidos.
   */
  const validarMatriz = (matriz) => {
    const requiredFields = ["treinamento", "dataRealizacao", "local", "cargaHoraria", "participantes"];
    const erros = validarCamposObrigatorios(matriz, requiredFields);
  
    if (matriz.cargaHoraria && isNaN(Number(matriz.cargaHoraria))) {
      erros.push("A carga horária deve ser um número válido.");
    }
  
    if (matriz.participantes && !Array.isArray(matriz.participantes)) {
      erros.push("Os participantes devem ser fornecidos como uma lista.");
    }
  
    return erros;
  };
  
  module.exports = {
    validarCamposObrigatorios,
    isValidObjectId,
    validarColaborador,
    validarTreinamento,
    validarMatriz,
  };
  