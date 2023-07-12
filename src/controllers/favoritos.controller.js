const db = require("../config/database");


exports.createFavorito = async (req, res) => {
  const { fav_cpf, fav_isbn} = req.body;
  await db.query(
    'INSERT INTO favoritos (fav_cpf, fav_isbn) VALUES ($1, $2)',
    [fav_cpf, fav_isbn],
    (error) => {
      if (error) {
        res.status(500).json({ error: 'Erro ao adicionar favorito.' });
      }
    }
  );
  res.json({ message: 'Favorito adicionado com sucesso.' });
};

exports.showFavorito = async (req, res) => {
  const cpf = req.query.cpf;
  const isbn = req.query.isbn;
  query = `SELECT * FROM public.favoritos where fav_cpf = '${cpf}' and fav_isbn = '${isbn}';`

  db.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Erro ao buscar favorito.' });
    } else if (results.rows.length === 0) {
      res.status(404).json({ error: 'Favorito não encontrado.' });
    }
    res.json(results.rows[0]);
  });
  
};

exports.listAllFavorito = async (req, res) => {
  db.query('SELECT * FROM public.favoritos', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Erro ao buscar favorito.' });
    }else{
        res.json(results.rows);
    }
  });
  
};

exports.updateFavorito = async (req, res) => {
    const { fav_cpf, fav_isbn } = req.body;

    db.query(
        'UPDATE public.favoritos SET fav_isbn = $2  WHERE fav_cpf = $1',
        [fav_cpf, fav_isbn],
        (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Erro ao atualizar favorito.' });
        } else if (results.rowCount === 0) {
            res.status(404).json({ error: 'Favorito não encontrado.' });
        }
    });

    res.json({ message: 'Favorito atualizada com sucesso.' });
};

exports.deleteFavorito = async (req, res) => {
    const isbn = req.query.isbn;
    const cpf = req.query.cpf;
  
    db.query('DELETE FROM public.favoritos WHERE fav_cpf = $1 and fav_isbn = $2', [cpf, isbn], (error, results) => {
        console.log(error)
        if (error) {
        res.status(500).json({ error: 'Erro ao excluir favorito.'});
        } else if (results.rowCount === 0) {
        res.status(404).json({ error: 'Favorito não encontrado.'});
        }
    });

    res.json({ message: 'Favorito excluída com sucesso.' });
};