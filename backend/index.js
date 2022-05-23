const express = require('express'), 
    server = express(), 
    cors = require('cors')

// TODO: CREATE SQLITE DATABASE

server.use(cors());
server.use(express.json());

server.get('/',(req,res) => {
    res.end("<html>Hello world</html>")
})

// TODO: WRITE PRODUCT QUERY
server.get('/produtos', (req,res) =>{
    const sql = "SELECT * FROM produtos";
    // TODO: IMPLEMENT SEARCH
    results = {}
    res.json(results)
})


server.get('/produtoshome', (req,res) =>{
    const sql = "SELECT * FROM produtos where idproduto < 5";
    // TODO: IMPLEMENT SEARCH
    results = {}
    res.json(results)
})

server.get('/msg', (req,res) =>{
    const sql = "SELECT * FROM comentarios";
    // TODO: IMPLEMENT SEARCH
    results = {}
    res.json(results)
})

server.post('/msg', (req,res)=>{
    const {nome, msg} = req.body
    const sql = `insert into comentarios (nome, msg) values ('${nome}','${msg}')`;
    // TODO: IMPLEMENT SEARCH
    results = {}
    res.json(results)
})


server.listen(3008, ()=>{
    console.log("Server  on")
})