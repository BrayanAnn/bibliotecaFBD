const db = require("../config/database");


exports.createLibre = async (req, res) => {
  const { isbn, titulo, autor, editora, datapublicacao } = req.body;

  await db.query(
    'INSERT INTO public.livro (isbn, titulo, autor, editora, datapublicacao) VALUES ($1, $2, $3, $4, $5)',
    [isbn, titulo, autor, editora, datapublicacao],
    (error) => {
      if (error) {
        res.status(500).json({ error: 'Erro ao adicionar livro.' });
      } 
    }
  );
  res.status(201).json({ message: 'Livro adicionado com sucesso.' });
};

exports.showLibre = async (req, res) => {
  const isbn = req.query.isbn;
  query = `SELECT * FROM public.livro where isbn = '${isbn}';`
  console.log(query)
  db.query(query ,(error, results) => {
    if (error) {
      res.status(500).json({ error: 'Erro ao buscar livros.' });
    } 
    res.json(results.rows[0]);
  });
};




exports.listAllLibres = async (req, res) => {
  db.query('SELECT * FROM public.livro', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Erro ao buscar livros.' });
    } else {
      res.json(results.rows);
    }
  });
};

exports.updateLibre = async (req, res) => {
  const isbn = req.query.isbn;
  const { titulo, autor, editora, datapublicacao } = req.body;
  await db.query(
    'UPDATE public.livro SET titulo = $1, autor = $2, editora = $3, datapublicacao = $4 WHERE isbn = $5',
    [titulo, autor, editora, datapublicacao, isbn],
    (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro ao atualizar livro.' });
      } else if (results.rowCount === 0) {
        res.status(404).json({ error: 'Livro não encontrado.' });
      }
    }
    
  );
  res.json({ message: 'Livro atualizado com sucesso.' });
  
};

exports.deleteLibreByISBN = async (req, res) => {
  const isbn = req.query.isbn;

  await db.query('DELETE FROM public.livro WHERE isbn = $1', [isbn], (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Erro ao excluir livro.' });
    } else if (results.rowCount === 0) {
      res.status(404).json({ error: 'Livro não encontrado.' });
    }
  });
  res.json({ message: 'Livro excluído com sucesso.' })
};