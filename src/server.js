const express = require('express'); //express é um microframework, ajuda na definição de rotas, etc
const mongoose = require('mongoose'); //express é um microframework, ajuda na definição de rotas, etc

const routes = require('./routes'); //caminho relativo ./

const app = express(); //criar aplicação

mongoose.connect('mongodb+srv://voigtito:voigtito@voigtito-5wr0m.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true, //usadas para funcionar com o mongo
})
//req.query é para acessar os parâmetros da query (para filtros)
//re.params é para acessar route params (para edição e delete)
//req.body é para acessar corpo da requisição (para criação e edição de registros)

app.use(express.json()); //falar para o express usar json
app.use(routes);

app.listen(3333); //porta da aplicação "localhost:3333"
