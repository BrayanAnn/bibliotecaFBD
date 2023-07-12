const db = require("../config/database");


exports.createEmprestimo = async (req, res) => {
  const { emp_cpf, emp_isbn, data_emprestimo } = req.body;
  await db.query(
    'INSERT INTO emprestimo (emp_cpf, emp_isbn, data_emprestimo) VALUES ($1, $2, $3)',
    [emp_cpf, emp_isbn, data_emprestimo],
    (error) => {
      if (error) {
        res.status(500).json({ error: 'Erro ao adicionar emprestimo.' });
      }
    }
  );
  res.json({ message: 'Emprestimo adicionado com sucesso.' });
};

exports.showEmprestimo = async (req, res) => {
  const cpf = req.query.cpf;
  const isbn = req.query.isbn;
  query = `SELECT * FROM public.emprestimo where emp_cpf = '${cpf}' and emp_isbn = '${isbn}';`

  db.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Erro ao buscar Emprestimo.' });
    } else if (results.rows.length === 0) {
      res.status(404).json({ error: 'Emprestimo não encontrado.' });
    }
    res.json(results.rows[0]);
  });
  
};

exports.listAllEmprestimo = async (req, res) => {
  db.query('SELECT * FROM public.emprestimo', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Erro ao buscar emprestimo.' });
    }else{
        res.json(results.rows);
    }
  });
  
};

exports.updateEmprestimo = async (req, res) => {
    const { emp_cpf, emp_isbn, data_emprestimo } = req.body;
    db.query(
        'UPDATE public.emprestimo SET data_emprestimo = $3 WHERE emp_cpf = $1 and emp_isbn = $2',
        [emp_cpf, emp_isbn, data_emprestimo],
        (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Erro ao atualizar emprestimo.' });
        } else if (results.rowCount === 0) {
            res.status(404).json({ error: 'Emprestimo não encontrado.' });
        }
    });
    res.json({ message: 'Emprestimo atualizada com sucesso.' });
};

exports.deleteEmprestimo = async (req, res) => {
    const isbn = req.query.isbn;
    const cpf = req.query.cpf;
  
    db.query('DELETE FROM public.emprestimo WHERE emp_cpf = $1 and emp_isbn = $2', [cpf, isbn], (error, results) => {
        console.log(error)
        if (error) {
        res.status(500).json({ error: 'Erro ao excluir emprestimo.'});
        } else if (results.rowCount === 0) {
        res.status(404).json({ error: 'Emprestimo não encontrado.'});
        }
    });

    res.json({ message: 'Emprestimo excluído com sucesso.' });
};