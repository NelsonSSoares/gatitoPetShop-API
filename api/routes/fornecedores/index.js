const router = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')
const Fornecedor = require('./Fornecedor');

router.get('/', async (req, res)=> {
    
    const response = await TabelaFornecedor.listar()
    const resp = JSON.stringify(response)
    res.send(resp)
})

router.post('/', async (req, res)=>{
    const dataRecived = req.body;
    const fornecedor = new Fornecedor(dataRecived);
    await fornecedor.criar()
    
    res.send(JSON.stringify(fornecedor))

}) 

module.exports = router;