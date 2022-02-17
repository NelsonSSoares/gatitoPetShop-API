class DadosNaoFornecidos extends Error{
    constructor(){
        super('SEM DADOS DISPONIVEIS PARA UPDATE!!!!')
        this.name = 'Dados não fornecidos'
        this.idError = 2
    }
}

module.exports = DadosNaoFornecidos;