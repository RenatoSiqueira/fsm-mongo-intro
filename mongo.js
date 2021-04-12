const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

MongoClient.connect('mongodb://localhost:27017/intro-mongo', (err, db) => {
  // console.log(err, db)
  const pessoas = db.collection('pessoas')
  /*
  pessoas.insert({
    nome: 'Tulio Faria',
    nascimento: '1985-08-04'
  }, (err, res) => {
    console.log(err, res)
  })
  */

  /*
  const cursorPessoas = pessoas.find({})
  cursorPessoas.forEach(doc => {
    console.log(doc)
  }, () => console.log('fim'))
  */

  /*
  pessoas.update({
    _id: mongodb.ObjectID('6073b49c5bb1a927a6f5e07e')
  }, {
    $set: {
      nome: 'Tulio Vitor Machado Faria',
      nascimento: '1988-05-05'
    }
  }, (err, res) => console.log(err))
  */

  pessoas.remove({
    _id: mongodb.ObjectID('6073b49c5bb1a927a6f5e07e')
  }, (err, res) => console.log(err))
})