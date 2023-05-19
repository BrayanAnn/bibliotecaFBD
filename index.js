// Import essential libraries 
const express = require('express'); 
const app = express(); 
const path = require('path'); 
const router = express.Router(); 
// Setup essential routes 
router.get('/', function(req, res) { 
    let acervo = "inicio";
    let template = `templates/inicio/index.html`;

    res.sendFile(path.join(__dirname + '/templates/inicio/index.html')); 
    //__dirname : It will resolve to your project folder. 
}); 
router.get('/acervo', function(req, res) { 
    res.sendFile(path.join(__dirname + '/templates/acervo/index.html')); 
}); 
router.get('/livro', function(req, res) { 
    res.sendFile(path.join(__dirname + '/templates/livro/index.html')); 
}); 
//add the router 
app.use('/', router); 
app.listen(process.env.port || 3000); 
console.log('Servidor rodando na porta 3000'); 