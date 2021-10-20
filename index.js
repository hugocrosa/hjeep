const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const perguntaModel1 = require("./database/pergunta");
//DATABASE

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

//EXPRESS USAR EJS COMO VIEW EGINE
app.set('view engine', 'ejs');
app.use(express.static('public'));
//BODY PARSER
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//ROTAS
app.get("/",(req, res) => {
    res.render("index");
});

app.get("/perguntar",(req, res) => {
    res.render("perguntar");
})

app.post("/salvarpergunta",(req,res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulário recebido! titulo " + titulo + " " + " descricao " + descricao);
});


app.listen(8000,()=>{console.log("App rodando!");});