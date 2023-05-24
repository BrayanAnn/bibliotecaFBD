const express = require('express'); 
const app = express(); 
const path = require('path'); 
const router = express.Router(); 

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// ###########ROTAS###########

// GET
router.get('/api/livros', async (req, res) => {
    const livros = await prisma.livro.findMany();
    res.json(livros)
});

router.get('/api/usuarios', async (req, res) => {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios)
});

//POST
router.post('/api/usuarios/create', async function(req, res){
    const {name, email}  = req.body;

    const result = await prisma.usuario.create({
        data: { 
            name,
            email,
        },
    })
    console.log(result);
    res.json(result);

});


app.get('/', async(req,res) =>{
    res.sendFile(__dirname + '/test.html');
});
//add the router 
app.use('/', router); 
app.listen(process.env.port || 3000); 
console.log('Servidor rodando na porta 3000'); 