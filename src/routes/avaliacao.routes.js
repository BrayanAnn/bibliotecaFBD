const routes = require('express-promise-router')();
const avaliacaoController = require('../controllers/avaliacao.controller');

// ADICIONA AVALIACAO
routes.post('/avaliacao', avaliacaoController.createAvaliation);

//LISTA TODOS AS AVALIACOES
routes.get('/avaliacoes', avaliacaoController.listAllAvaliation);

//MOSTRA APENAS A AVALIACAO SELECIONADO PELO ISBN E CPF
routes.get('/avaliacao', avaliacaoController.showAvaliation);

//ATUALIZA A AVALIACAO PELO ISBN E CPF
routes.put('/avaliacao', avaliacaoController.updateAvaliation);    

//DELETE UMA AVALIACAO PELO ID
routes.delete('/avaliacao', avaliacaoController.deleteAvaliation);

module.exports = routes;