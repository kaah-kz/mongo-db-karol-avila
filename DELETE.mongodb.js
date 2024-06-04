/***** DELETE COM MONGODB ******/

/***** DELETE ONE *****/
use('libri-database');
db['libri-collection'].deleteOne(
                    {codigo: '5'}
)


/***** DELETE MANY *****/
use('libri-database');
db['libri-collection'].deleteMany(

            {categoria: {$ne:'Fantasia Heroica'}}
)

use('libri-database');
db['libri-collection'].find();

use('libri-database');
db['libri-collection'].find({categoria:'Fantasia Heroica'});