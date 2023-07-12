const db = require("../config/database");


exports.createUser = async (req, res) => {
  const { cpf, nome, sobrenome, email, telefone, senha } = req.body;

  db.query(
    'INSERT INTO usuario (cpf, nome, sobrenome, email, telefone, senha) VALUES ($1, $2, $3, $4, $5, $6)',
    [cpf, nome, sobrenome, email, telefone, senha],
    (error) => {
      if (error) {
        res.status(500).json({ error: 'Erro ao adicionar usuário.' });
      }
    }
  );
  res.json({ message: 'Usuário adicionado com sucesso.' });
};

exports.showUser = async (req, res) => {
  const cpf = req.query.cpf;
  query = `SELECT * FROM public.usuario where cpf = '${cpf}';`

  db.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Erro ao buscar usuário.' });
    } else if (results.rows.length === 0) {
      res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.json(results.rows[0]);
  });
  
};




exports.listAllUsers = async (req, res) => {
  db.query('SELECT * FROM usuario', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Erro ao buscar usuários.' });
    } else {
      res.json(results.rows);
    }
  });
};

exports.updateUser = async (req, res) => {
  const cpf = req.query.cpf;
  const { nome, sobrenome, email, telefone, senha } = req.body;

  db.query(
    'UPDATE usuario SET nome = $1, sobrenome = $2, email = $3, telefone = $4, senha = $5 WHERE cpf = $6',
    [nome, sobrenome, email, telefone, senha, cpf],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuário.' });
      } else if (results.rowCount === 0) {
        res.status(404).json({ error: 'Usuário não encontrado.' });
      }
  });

  res.json({ message: 'Usuário atualizado com sucesso.' });
};

exports.deletUserByCPF = async (req, res) => {
  const cpf = req.query.cpf;

  db.query('DELETE FROM usuario WHERE cpf = $1', [cpf], (error, results) => {
    console.log(error)
    if (error) {
      res.status(500).json({ error: 'Erro ao excluir usuário.' });
    } else if (results.rowCount === 0) {
      res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    
  });
  res.json({ message: 'Usuário excluído com sucesso.' });
};