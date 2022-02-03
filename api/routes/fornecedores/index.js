const router = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')

router.use('/', async (req, res)=> {
    
    const response = await TabelaFornecedor.listar()
    res.send(JSON.stringify(response))
})

module.exports = router;