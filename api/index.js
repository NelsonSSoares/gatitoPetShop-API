const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');
const NaoEncontrado = require('./erros/NaoEncontrado')

app.use(bodyParser.json());

const router = require('./routes/fornecedores');
app.use('./api/fornecedores', router);

app.use((error, req, res, proximo)=>{
    if (error instanceof NaoEncontrado) {
        res.status(404)
    } else {
        res.status(400)
    }

    res.send(
        JSON.stringify({
            message: e.message,
            id: error.idError
        })
    )
})


app.listen(config.get('api.door'), () =>{
    console.log('Servidor Online!');
});
    