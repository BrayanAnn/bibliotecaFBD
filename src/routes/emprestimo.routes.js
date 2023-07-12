const routes = require('express-promise-router')();
const emprestimoController = require('../controllers/emprestimo.controller');

// ADICIONA EMPRESTIMO
routes.post('/emprestimo', emprestimoController.createEmprestimo);

//LISTA TODOS OS EMPRESTIMO
routes.get('/emprestimos', emprestimoController.listAllEmprestimo);

//MOSTRA APENAS O EMPRESTIMO SELECIONADO PELO ISBN E CPF
routes.get('/emprestimo', emprestimoController.showEmprestimo);

//ATUALIZA O EMPRESTIMO PELO ISBN E CPF
routes.put('/emprestimo', emprestimoController.updateEmprestimo);    

//DELETE UM EMPRESTIMO PELO ISBN E CPF
routes.delete('/emprestimo', emprestimoController.deleteEmprestimo);

module.exports = routes;