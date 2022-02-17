class CampoInvalido extends Error{
    constructor(campo){
        const mensagem = `O Campo ${campo} está invalido`;
        super(mensagem);
        this.name = 'CampoInvalido';
        this.idError = 1;
    }

}

module.exports = CampoInvalido;