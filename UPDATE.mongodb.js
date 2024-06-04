/***** UPDATE COM MONGODB ******/

/***** UPDATE ONE *****/
use('libri-database');

db['libri-collection'].updateOne(
  {titulo: 'As Cavernas de Aço'},
  {
    $set: {valor: 250}
  }
);

/***** UPDATE MANY *****/
use('libri-database');

db['libri-collection'].updateMany(
  {titulo: 'As Cavernas de Aço'},
  {
    $set: {valor: 250}
  }
);

use('libri-database');
db['libri-collection'].find({"categoria":'Ficção Científica'});