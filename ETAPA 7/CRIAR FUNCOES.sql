-- Funções
-- Cria um emprestimo de um livro para um usuário 
--! (Atvia o gatilho operacao_emprestimo)
CREATE OR REPLACE FUNCTION emprestar_livro(isbn_livro varchar(15), cpf_usuario varchar(11))
    RETURNS VOID LANGUAGE 'sql' AS
    '
    INSERT INTO emprestimo(emp_cpf, emp_isbn, data_emprestimo)
        VALUES (cpf_usuario, isbn_livro, CURRENT_DATE)
    ';
-- Devolve um livro emprestado por um usuário
-- !(Atvia o gatilho operacao_devolucao)
CREATE OR REPLACE FUNCTION devolver_livro(isbn_livro varchar(15), cpf_usuario varchar(11))
    RETURNS varchar LANGUAGE 'sql' AS
    '
    DELETE FROM emprestimo
        WHERE emp_cpf = cpf_usuario AND emp_isbn = isbn_livro;
    SELECT isbn_livro
    ';
-- Para executar SELECT devolver_livro('5648754252122', '98925697092');

-- Funções de gatilho
-- Atualiza o histórico de empréstimos
CREATE OR REPLACE FUNCTION atualizar_historico_emprestimo()
    RETURNS trigger LANGUAGE 'plpgsql' AS
    $$
    DECLARE
        tipo_operacao varchar := TG_ARGV[0];
    BEGIN
        INSERT INTO historico_emprestimo(operacao, usuario, data_operacao)
            VALUES (tipo_operacao, USER, CURRENT_DATE);
        RETURN NEW;
    END;
    $$;