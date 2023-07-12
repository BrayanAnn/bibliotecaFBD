<h1>Configuração do projeto</h1>
<p>Para executar o projeto é necessário ter instalado:</p>
<ul>
  <li>Node.js (v18.16.0 ou superior)</li>
  <li>POSTGRESQL (versão 15 ou superior)</li>
</ul>
<p>Logo após a instalação é necessário executar os arquivos SQL no query tool do PgAdmin, começando pelos arquivos da ETAPA 6, na seguinte sequencia "CREATE DATABASE BIBLIOTECA.sql" -> "INSERIR DADOS.sql". Logo após execute os arquivos da ETAPA 7, seguinte sequência "CRIAR FUNCOES.sql" -> "CRIAR GATILHOS.sql" -> "CRIAR USUARIO.sql"</p>
<h1>Dependencias do node_modules</h1>
<ul>
  <li>postgres database (npm install pg)</li>
  <li>dotenv to manipulate secrets variables of db (npm install dotenv)</li>
  <li>express to create CRUD and manipulate data (npm install express)</li>
</ul>
<p>Após ter seguido os passos anteriores e ter instalado todas as dependencias execute o projeto na pasta raiz do projeto com o seguinte comando: <code>nodemon server.js</code></p>
<h1>Testes</h1>
<p>Para realizar testes utilize o software Postman, e importe a coleção contida na pasta Collection-Postman</p>
