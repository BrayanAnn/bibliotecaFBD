use BIBLIOTECA;
--
-- LIVRO
--

INSERT INTO LIVRO (ISBN, TITULO, AUTOR, EDITORA, DATAPUBLICACAO)
VALUES 	
		('1268754292548', 'O poder do hábito', 'Charles Duhigg', 'Abril', '2012-09-14'),
		('5648754252122', 'O alquimista', 'Paulo Coelho', 'Abril', '2017-04-05'),
		('2148985322182', 'SQL Guia Prático', 'Alice Zhao', 'Novatec Editora', '2023-01-25'),
		('4248985322182', 'Lógica de Programação e Algoritmos com JavaScript', 'Ed cio Fernando Iepsen', 'Novatec Editora', '2017-04-22'),
		('9788575413425', 'O que é o SUS', 'Jairnilson Paim', 'SciELO - Editora FIOCRUZ', '2009-10-15'),
		('8575413732231', 'Tabu do corpo', 'Jos  Carlos Rodrigues', 'Editora da Fundação Oswaldo Cruz', '2006-05-18'),
		('9722125415659', 'O corpo na história', 'José Carlos Rodrigues', 'Editora da Fundação Oswaldo Cruz', '1998-07-16'),
		('9648321722182', 'Introdução à Programação com a Linguagem C', 'Rodrigo de Barros Paes', 'Novatec Editora', '2022-03-27'),
		('8643982122175', 'Pense em Python', 'Allen B. Downey', 'Novatec Editora', '2019-06-06'),
		('6524842172182', 'Refatoração 2a edição', 'Allen B. Downey', 'Novatec Editora', '2018-07-22');

--
-- USUARIO
--

INSERT INTO USUARIO (CPF, NOME, SOBRENOME, EMAIL, TELEFONE, SENHA)
VALUES 	
		('14876351090', 'Joyce', 'Borg', 'caroline.evelyn.dasneves@corp.globo.com', '(84)2939-9988', '67MuscleRain23'),
		('76338860059', 'Carlos', 'Wong', 'kamilly_rosa_dacruz@transmazza.com.br', '(84)99184-4608', 'NaoSeiMinhaSenha222'),
		('33603624033', 'Miguel', 'Narayan', 'jessica.heloise.damata@br.atlascopco.com', '(21)98169-3794', '9090Fechar80'),
		('68955792069', 'Junior', 'Smith', 'simone-almada99@tigertimoveis.com', '(21)3600-0264', 'Garf223'),
		('86551960022', 'Frederico', 'Wallace', 'pedronoahbaptista@hotmai.com.br', '(68)3552-7985', '98Pizza2'),
		('98925697092', 'Micaela', 'Zelaya', 'elianesebastianateixeira@decorsul.com', '(68)98448-8258', 'Hotdog221'),
		('04154227017', 'Joana', 'Jabbar', 'carlos_brito@transportadoratransdel.com.br', '(27)3887-8979', '185232Aeba'),
		('92629265021', 'Denilson', 'Emanuel', 'vanessa.leticia.dacruz@rocketmail.com', '(27)98907-7684', 'Adonoes232'),
		('23243677564', 'Cleber', 'Santos', 'carlos_brito@transportadoratransdel.com.br', '(11)3887-8979', 'Amoeba888'),
		('91232996421', 'Michele', 'Donis', 'vanessa.leticia.dacruz@rocketmail.com', '(31)98507-7874', 'ANOE2232');

--
-- FAVORITOS
--

INSERT INTO FAVORITOS (FAV_CPF, FAV_ISBN) 
VALUES	
		('14876351090', '1268754292548'),
		('14876351090', '5648754252122'),
		('76338860059', '2148985322182'),
		('33603624033', '4248985322182'),
		('86551960022', '2148985322182'),
		('86551960022', '8643982122175'),
		('92629265021', '6524842172182'),
		('23243677564', '4248985322182'),
		('23243677564', '5648754252122'),
		('23243677564', '8643982122175');
--
-- AVALIACAO
--

INSERT INTO AVALIACAO (AVA_CPF, AVA_ISBN, NOTA, COMENTARIO) 
VALUES
		('14876351090', '6524842172182', 5, 'Ótimo livro!'),
		('14876351090', '8643982122175', 4, 'Romance distópico interessante.'),
		('33603624033', '6524842172182', 5, 'Série de fantasia épica!'),
		('33603624033', '5648754252122', 5, 'Romance clássico.'),
		('33603624033', '9788575413425', 4, 'História cativante.'),
		('86551960022', '6524842172182', 3, 'Boa leitura.'),
		('86551960022', '4248985322182', 5, 'Profundo e instigante.'),
		('98925697092', '4248985322182', 5, 'Um favorito da infância.'),
		('98925697092', '6524842172182', 5, 'Memórias inspiradoras.'),
		('98925697092', '8643982122175', 4, 'Mundo mágico.');

--
-- EMPRESTIMO
--

INSERT INTO EMPRESTIMO (EMP_CPF, EMP_ISBN, DATA_EMPRESTIMO) 
VALUES 
		('33603624033', '4248985322182', '2023-12-20'),
		('14876351090', '9722125415659', '2022-11-17'),
		('68955792069', '5648754252122', '2023-01-02'),
		('23243677564', '6524842172182', '2022-08-23'),
		('04154227017', '8643982122175', '2023-06-12'),
		('14876351090', '9648321722182', '2023-10-05'),
		('92629265021', '2148985322182', '2021-06-26'),
		('98925697092', '5648754252122', '2021-03-17'),
		('68955792069', '4248985322182', '2023-04-28'),
		('33603624033', '1268754292548', '2023-09-19');













