
const TabelaFornecedor = require('./TabelaFornecedor');
const CampoInvalido = require('../../erros/CampoInvalido');
const DadosNaoFornecidos = require('../../erros/DadosNaoFornecidos');
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
        this.validar()
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

    async carregar(){
        const encontrado = await TabelaFornecedor.getById(this.id)
        this.empresa = encontrado.empresa;
        this.email = encontrado.email;
        this.categoria = encontrado.categoria;
        this.dataCriacao = encontrado.dataCriacao;
        this.dataAtualizacao = encontrado.dataAtualizacao;
        this.versao = encontrado.versao;
    }

    async atualizar(){
        await TabelaFornecedor.getById(this.id)
        
        const campos = ['empresa', 'email','categoria']
        const dadosAtualizar = {}

        campos.forEach((campo)=>{
            const valor = this[campo]
            if(typeof valor === 'string' && valor.length > 0 ){
                dadosAtualizar[campo] = valor
            }

        })

        
        if(Object.keys(dadosAtualizar).length === 0){
            throw new DadosNaoFornecidos()
        }

        await TabelaFornecedor.atualizar(this.id, dadosAtualizar)
    }

    async delete(){
        return TabelaFornecedor.delete(this.id)
    }

    validar(){
        const campos = ['empresa', 'email', 'categoria']

        campos.forEach(campo =>{
            const valor = this[campo]

            if(typeof valor !== 'string' || valor === 0){
                throw new CampoInvalido(campo)
            }
        })
    }

}

module.exports = Fornecedor;