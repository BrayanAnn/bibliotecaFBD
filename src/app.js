const express = require('express');
const cors = require('cors');
const app = express();
// ==> Rotas da API:
const index = require('./routes/index');
const livroRoute = require('./routes/livro.routes');
const usuarioRoute = require('./routes/usuario.routes');
const avaliacaoRoute = require('./routes/avaliacao.routes');
const emprestimoRoute = require('./routes/emprestimo.routes');
const favoritoRoute = require('./routes/favoritos.routes');
const { getLivrosFavoritos, getLivroNota, getLivrosEmprestadosParaUsuario, getEmprestimosDoLivro, getLivrosFavoritoUsuario, createLivrosEmprestadosUsuarios } = require('./consultasPersonalizadas.controller');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(index);

//ROUTES
app.use('/api/', livroRoute);
app.use('/api/', usuarioRoute);
app.use('/api/', avaliacaoRoute);
app.use('/api/', emprestimoRoute);
app.use('/api/', favoritoRoute);  

async function  carregarExemplos(){
    const livrosFavoritos = await getLivrosFavoritos('14876351090');
    console.log('Livros favoritos:', livrosFavoritos);

    // Obter a classificação média e o número de classificações de um livro específico
    const livroNota = await getLivroNota('9788575413425');
    console.log('Classificações do livro:', livroNota);

    // Obter os livros que foram emprestados para um usuário específico
    const livrosEmprestados = await getLivrosEmprestadosParaUsuario('14876351090');
    console.log('Livros emprestados:', livrosEmprestados);

    // Obter os usuários que pegaram emprestado um livro específico
    const emprestimos = await getEmprestimosDoLivro('4248985322182');
    console.log('Usuários que pegaram emprestado o livro:', emprestimos);

    // Obter os livros favoritos de um usuário específico, incluindo sua classificação média (se disponível)
    const livrosFavoritoUsuario = await getLivrosFavoritoUsuario('14876351090');
    console.log('Livros favoritos do usuário:', livrosFavoritoUsuario);
    
    // VIEW : 
    const viewLivrosEmprestadosUsuarios = await createLivrosEmprestadosUsuarios();
    console.log('Livros emprestados para os usuarios:', viewLivrosEmprestadosUsuarios);


}

carregarExemplos();


module.exports = app;