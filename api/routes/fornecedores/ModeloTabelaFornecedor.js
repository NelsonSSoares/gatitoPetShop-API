const Sequelize = require('sequelize');
const instancia = require('../../db/database');


const columns = {
    empresa:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
       type: Sequelize.STRING,
       allowNull: false 
    },
    categoria:{
        type: Sequelize.ENUM('ração', 'brinquedos'),
        allowNull: false
    }
}
const settings = {
    freezeTableName: true,
    tableName: 'fornecedores',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('fornecedor', columns, settings );