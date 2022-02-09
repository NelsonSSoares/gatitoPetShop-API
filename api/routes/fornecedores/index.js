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

router.get('/:idFornecedor', async (req, res)=>{

    try{
        const id = req.params.id;
        const fornecedor = new Fornecedor({id: id})
        await fornecedor.carregar()
        res.send(
            JSON.stringify(fornecedor)
        )
    
    }catch(e){
        res.send(JSON.stringify({
            message: e.message
        }))
    }


})

router.put('/:idFornecedor', async (req, res) =>{
    
    try{
        const id = req.params.id
        const dataRecived = req.body
        const dados = Object.assign({}, dadosRecebidos, {id: id})

        const fornecedor = new Fornecedor(dados);
        await fornecedor.atualizar()
        res.end()
    }catch(e){
        res.send(
            JSON.stringify({
                message: e.message
            })
        )
    }
})



module.exports = router;