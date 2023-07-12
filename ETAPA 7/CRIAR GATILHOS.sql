-- Gatilhos
-- Os gatilhos executam funções quando uma operação é realizada em uma determinada tabela.
-- Portanto crie as funções antes de criar os gatilhos.
CREATE TRIGGER operacao_emprestimo
    AFTER INSERT ON emprestimo
    FOR EACH ROW EXECUTE FUNCTION
    atualizar_historico_emprestimo('EMPRESTIMO');
CREATE TRIGGER operacao_devolucao
    AFTER DELETE ON emprestimo
    FOR EACH ROW EXECUTE FUNCTION
    atualizar_historico_emprestimo('DEVOLUÇÃO');