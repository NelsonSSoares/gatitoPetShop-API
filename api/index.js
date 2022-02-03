const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');


app.use(bodyParser.json());

const router = require('./routes/fornecedores');
app.use('./api/fornecedores', router);


app.listen(config.get('api.door'), () =>{
    console.log('Servidor Online!');
});
    