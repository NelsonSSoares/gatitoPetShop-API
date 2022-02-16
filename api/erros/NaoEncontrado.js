class NaoEncontrado extends Error {
    constructor(){
        super('Fornecedor not found');
        this.name = 'NaoEncontrado';
        this.idError = 0;

    }


}

module.exports = NaoEncontrado;