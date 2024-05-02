// ---------------------------------------------------------------------------------------------------------------
// DEFINE O NOME DO BANCO DE DADOS
// const database = 'libri-database';

// DEFINE O NOME DA COLLECTION
const collection = 'libri-collection';

// ACESSA O BANCO DE DADOS libri-database
use(database);

// SELECIONA TODOS OS DADOS DE TODOS OS ARQUIVOS DA COLLECTION
db["libri-collection"].find();

// ---------------------------------------------------------------------------------------------------------------

// SELECIONA DADOS BASEADOS EM CRITÉRIOS DE BUSCA
// const database = 'libri-database';
use(database);

db["libri-collection"].find({"categoria":"Ficção Científica"});


const database = 'libri-database';
use(database);

db["libri-collection"].find({"categoria":"Ficção Científica"}, {"_id":0, "codigo":0});

// ---------------------------------------------------------------------------------------------------------------

// SELECIONA DADOS BASEADOS EM CRITÉRIOS DE BUSCA POR UMA PARTE DE STRING DE UM CAMPO