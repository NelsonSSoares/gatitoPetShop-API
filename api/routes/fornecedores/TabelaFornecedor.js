const Modelo = require('./ModeloTabelaFornecedor')

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
            throw new Error('Fornecedor not found');
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