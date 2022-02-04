const TabelaFornecedor = require('./TabelaFornecedor');

class Fornecedor{

    constructor({id, empresa, email, categoria, dataCriacao, dataAtualizacao, versao}){
        this.id = id,
        this.empresa = empresa,
        this.email = email,
        this.categoria = categoria,
        this.dataCriacao = dataCriacao,
        this.dataAtualizacao = dataAtualizacao,
        this.versao = versao
    }

    async criar(){
        const response = await TabelaFornecedor.inserir({
            empresa: this.empresa,
            email: this.email,
            categoria: this.categoria

        })

        this.id = resultado.id,
        this.dataCriacao = response.dataCriacao
        this.dataAtualizacao = response.dataAtualizacao,
        this.versao = response.versao
    }

}

module.exports = Fornecedor;