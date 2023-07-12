-- Usuario: leitor
-- Senha: reader
-- Somente leitura de todas as tabelas do banco
CREATE ROLE leitor
    NOSUPERUSER NOCREATEDB
    LOGIN ENCRYPTED
    PASSWORD 'reader';
GRANT SELECT ON ALL TABLES IN SCHEMA public TO leitor;

-- Usuario: dba
-- Senha: biblio_read_write
-- Leitura e escrita nas tableas livro, usuario, favoritos, avaliacao, emprestimo
CREATE ROLE dba
    NOSUPERUSER
    LOGIN ENCRYPTED PASSWORD 'biblio_read_write';
GRANT leitor TO dba;
GRANT INSERT, DELETE, UPDATE ON TABLE
    livro, usuario, favoritos, avaliacao, emprestimo
    TO dba;