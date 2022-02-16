const Modelo = require('./ModeloTabelaFornecedor')
const NaoEncontrado = require('../../erros/NaoEncontrado');
module.exports = {
    listar () {
        return Modelo.findAll()
    },

    inserir(fornecedor){
        return Modelo.create(fornecedor)
    },

    async getById(id){
        const encontrado = await Modelo.findOne({
            where:{
                id: id
            }
        })
        if(!encontrado){
            throw new NaoEncontrado();
        }
        return encontrado;
    },

    atualizar(id, dadosAtualizar){
        return Modelo.update(
            dadosAtualizar,
            {
                where: {id: id}
            }
        )
    },

    delete(id){
        return Modelo.destroy({
            where: { id: id}
        })
    }
}