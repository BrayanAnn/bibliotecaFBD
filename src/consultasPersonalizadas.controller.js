const db = require("./config/database");

// Consulta 1 (da etapa 6): obter todos os livros favoritos de um usuário específico
exports.getLivrosFavoritos = async (cpf) => {
  const query = `
    SELECT LIVRO.ISBN, LIVRO.TITULO, LIVRO.AUTOR, LIVRO.EDITORA, LIVRO.DATAPUBLICACAO
    FROM LIVRO
    INNER JOIN FAVORITOS ON LIVRO.ISBN = FAVORITOS.FAV_ISBN
    WHERE FAVORITOS.FAV_CPF = $1;
  `;
  const values = [cpf];

  try {
    const { rows } = await db.query(query, values);
    return rows;
  } catch (error) {
    console.error('Erro ao obter os livros favoritos:', error);
    throw error;
  }
};

// Consulta 2 (da etapa 6): obter a classificação média e o número de classificações de um livro específico
exports.getLivroNota = async (isbn) => {
  const query = `
    SELECT LIVRO.ISBN, LIVRO.TITULO, AVG(AVALIACAO.NOTA) AS MEDIA_AVALIACAO, COUNT(AVALIACAO.NOTA) AS NUMERO_AVALIACOES
    FROM LIVRO
    LEFT JOIN AVALIACAO ON LIVRO.ISBN = AVALIACAO.AVA_ISBN
    WHERE LIVRO.ISBN = $1
    GROUP BY LIVRO.ISBN, LIVRO.TITULO;
  `;
  const values = [isbn];

  try {
    const { rows } = await db.query(query, values);
    return rows[0];
  } catch (error) {
    console.error('Erro ao obter as classificações do livro:', error);
    throw error;
  }
};

// Consulta 3 (da etapa 6): Obter os livros que foram emprestados para um usuário específico
exports.getLivrosEmprestadosParaUsuario = async (cpf) => {
  const query = `
    SELECT LIVRO.ISBN, LIVRO.TITULO, LIVRO.AUTOR, LIVRO.EDITORA, LIVRO.DATAPUBLICACAO
    FROM LIVRO
    INNER JOIN EMPRESTIMO ON LIVRO.ISBN = EMPRESTIMO.EMP_ISBN
    WHERE EMPRESTIMO.EMP_CPF = $1;
  `;
  const values = [cpf];

  try {
    const { rows } = await db.query(query, values);
    return rows;
  } catch (error) {
    console.error('Erro ao obter os livros emprestados:', error);
    throw error;
  }
};

// Consulta 4 (da etapa 6): obtenha os usuários que pegaram emprestado um livro específico
exports.getEmprestimosDoLivro = async (isbn) => {
  const query = `
    SELECT USUARIO.CPF, USUARIO.NOME, USUARIO.SOBRENOME, USUARIO.EMAIL, USUARIO.TELEFONE
    FROM USUARIO
    INNER JOIN EMPRESTIMO ON USUARIO.CPF = EMPRESTIMO.EMP_CPF
    WHERE EMPRESTIMO.EMP_ISBN = $1;
  `;
  const values = [isbn];

  try {
    const { rows } = await db.query(query, values);
    return rows;
  } catch (error) {
    console.error('Erro ao obter os usuários que pegaram emprestado o livro:', error);
    throw error;
  }
};

// Consulta 5 (da etapa 6): Obtenha os livros favoritos de um usuário específico, incluindo sua classificação média (se disponível)
exports.getLivrosFavoritoUsuario = async (cpf) => {
  const query = `
    SELECT LIVRO.ISBN, LIVRO.TITULO, LIVRO.AUTOR, LIVRO.EDITORA, LIVRO.DATAPUBLICACAO, AVALIACAO.AVERAGE_RATING
    FROM LIVRO
    INNER JOIN FAVORITOS ON LIVRO.ISBN = FAVORITOS.FAV_ISBN
    LEFT JOIN (
        SELECT AVA_ISBN, AVG(NOTA) AS AVERAGE_RATING
        FROM AVALIACAO
        GROUP BY AVA_ISBN
    ) AS AVALIACAO ON LIVRO.ISBN = AVALIACAO.AVA_ISBN
    WHERE FAVORITOS.FAV_CPF = $1;
  `;
  const values = [cpf];

  try {
    const { rows } = await db.query(query, values);
    return rows;
  } catch (error) {
    console.error('Erro ao obter os livros favoritos do usuário:', error);
    throw error;
  }
};

// Função para criar a visão que combina o livro e as informações do usuário para livros emprestados
exports.createLivrosEmprestadosUsuarios = async () => {
  const query = `
    CREATE OR REPLACE VIEW BORROWED_BOOKS_VIEW AS
    SELECT LIVRO.ISBN, LIVRO.TITULO, LIVRO.AUTOR, LIVRO.EDITORA, LIVRO.DATAPUBLICACAO, EMPRESTIMO.DATA_EMPRESTIMO, USUARIO.CPF, USUARIO.NOME, USUARIO.SOBRENOME, USUARIO.EMAIL, USUARIO.TELEFONE
    FROM LIVRO
    INNER JOIN EMPRESTIMO ON LIVRO.ISBN = EMPRESTIMO.EMP_ISBN
    INNER JOIN USUARIO ON EMPRESTIMO.EMP_CPF = USUARIO.CPF;
  `;

  try {
    await db.query(query);
    console.log('Visão criada com sucesso!');
  } catch (error) {
    console.error('Erro ao criar a visão:', error);
    throw error;
  }
};