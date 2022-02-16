const router = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')
const Fornecedor = require('./Fornecedor');
const NaoEncontrado = require('../../erros/NaoEncontrado')

router.get('/', async (req, res) => {

    const response = await TabelaFornecedor.listar()
    res.status(200)
    const resp = JSON.stringify(response)
    res.send(resp)
})

router.post('/', async (req, res) => {


    try {
        const dataRecived = req.body;
        const fornecedor = new Fornecedor(dataRecived);
        await fornecedor.criar()
        res.status(201)
        res.send(JSON.stringify(fornecedor))
    } catch (error) {
        res.status(400)
        res.send(
            JSON.stringify({
                message: error.message
            })
        )
    }

})

router.get('/:idFornecedor', async (req, res) => {

    try {
        const id = req.params.id;
        const fornecedor = new Fornecedor({ id: id })
        await fornecedor.carregar()
        res.status(200)
        res.send(
            JSON.stringify(fornecedor)
        )

    } catch (e) {
        res.status(404)
        res.send(JSON.stringify({
            message: e.message
        }))
    }


})

router.put('/:idFornecedor', async (req, res, proximo) => {

    try {
        const id = req.params.id
        const dataRecived = req.body
        const dados = Object.assign({}, dadosRecebidos, { id: id })

        const fornecedor = new Fornecedor(dados);
        await fornecedor.atualizar()
        res.status(204)
        res.end()
    } catch (erro) {
        proximo(erro)
    }
})

router.delete(':idFornecedor', async (req, res) => {

    try {
        const id = req.params.idFornecedor
        const fornecedor = new Fornecedor({ id: id })
        await fornecedor.carregar()
        await fornecedor.delete()
        res.status(204)
        res.end()
    } catch (e) {
        res.status(404)
        res.send(
            JSON.stringify({
                message: e.message
            })
        )
    }
})




module.exports = router;