const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');
const router = require('./routes/fornecedores');
const NaoEncontrado = require('./erros/NaoEncontrado')
const CampoInvalido = require('./erros/CampoInvalido')
const DadosNaoFornecidos = require('./erros/DadosNaoFornecidos');

app.use(bodyParser.json());



app.use('./api/fornecedores', router);

app.use((error, req, res, proximo)=>{
    let status = 500

    if (error instanceof NaoEncontrado) {
        status = 404
        
    }
    if(error instanceof CampoInvalido || error instanceof DadosNaoFornecidos){
        status = 400
        
    }



    res.status(status)

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
    