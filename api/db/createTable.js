const ModeloFornecedor = require('../routes/fornecedores/ModeloTabelaFornecedor');

ModeloFornecedor
    .sync()
    .then(() => console.log('Table created successfully'))
    .catch('FATAL ERROR, RUNTIME FATAL')