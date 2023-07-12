const db = require("../config/database");


exports.createAvaliation = async (req, res) => {
  const { ava_cpf, ava_isbn, nota, comentario } = req.body;
  await db.query(
    'INSERT INTO avaliacao (ava_cpf, ava_isbn, nota, comentario) VALUES ($1, $2, $3, $4)',
    [ava_cpf, ava_isbn, nota, comentario],
    (error) => {
      if (error) {
        res.status(500).json({ error: 'Erro ao adicionar avaliação.' });
      }
    }
  );
  res.json({ message: 'Avaliação adicionado com sucesso.' });
};

exports.showAvaliation = async (req, res) => {
  const cpf = req.query.cpf;
  const isbn = req.query.isbn;
  query = `SELECT * FROM public.avaliacao where ava_cpf = '${cpf}' and ava_isbn = '${isbn}';`

  db.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Erro ao buscar avaliação.' });
    } else if (results.rows.length === 0) {
      res.status(404).json({ error: 'avaliação não encontrado.' });
    }
    res.json(results.rows[0]);
  });
  
};

exports.listAllAvaliation = async (req, res) => {
  db.query('SELECT * FROM public.avaliacao', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Erro ao buscar avaliação.' });
    }else{
        res.json(results.rows);
    }
  });
  
};

exports.updateAvaliation = async (req, res) => {
  const cpf = req.query.cpf;
  const isbn = req.query.isbn;
  const {nota, comentario} = req.body;

  db.query(
    'UPDATE public.avaliacao SET nota = $3, comentario = $4 WHERE ava_isbn = $1 and ava_cpf = $2',
    [isbn, cpf, nota, comentario],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Erro ao atualizar avaliação.' });
      } else if (results.rowCount === 0) {
        res.status(404).json({ error: 'Avaliação não encontrado.' });
      }
  });

  res.json({ message: 'Avaliação atualizada com sucesso.' });
};

exports.deleteAvaliation = async (req, res) => {
    const isbn = req.query.isbn;
    const cpf = req.query.cpf;
  
    db.query('DELETE FROM public.avaliacao WHERE ava_cpf = $1 and ava_isbn = $2', [cpf, isbn], (error, results) => {
        console.log(error)
        if (error) {
        res.status(500).json({ error: 'Erro ao excluir avaliação.'});
        } else if (results.rowCount === 0) {
        res.status(404).json({ error: 'Avaliação não encontrado.'});
        }
    });

    res.json({ message: 'Avaliação excluída com sucesso.' });
};