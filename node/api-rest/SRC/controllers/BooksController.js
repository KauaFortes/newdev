const database = require('../databases/knex')
const logger = require('../utils/logger')

exports.findAllBooks = async (request, response) => {
  try {
    const sql = await database.select('*').from('bookcase')
  
    console.log('sqle ->', sql)
    return response.status(200).send({bookcase: sql})
  } catch (error) {
    logger(error.nessage)
    return response.status(500).send({ error: error?.message || e})
  }
}

exports.createBooks = async (request, response) => {
  try {
    await database('bookcase').insert(request.body)
    return response.status(200).send({
      status: 'success'
    })
   }  catch (error) {
    logger(error.nessage)
    return response.status(500).send({ error: error?.message || e})
   }
}

exports.getByIdBooks = async (request, response) => {
  try {
    const params = request.params;

    const [previousBooks] = await database
      .select('*')
      .from('bookcase')
      .where({ id: params.id })
      .limit(1);

    if (!previousBooks) {
      return response.status(404) 
        .send(`O registro com id: ${params.id} não foi encontrado!`);
    }
    return response
      .status(200)
      .send({ data: previousBooks });
  } catch (error) {
    logger(error.nessage)
    return response.status(500).send({ error: error?.message || e });
  }
}

exports.putBooks = async (request, response) => {
  try {
    const params = request.params
   

    const [previousBooks] = await database
    .select('*')
    .from('bookcase')
    .where({id: params.id})
    .limit(1) 

    if(!previousBooks) {         
      return response.status(404).send(`O registro com id ${params.id} não foi encontrado`)
    }
    const nextBooks = request.body
    console.log('author previousBooks Encontrado ===', previousBooks)
    console.log('author nextBooks ===', nextBooks)
  
    await database
    .update({name: nextBooks.name})
    .from('bookcase')
    .where({id: previousBooks.id})

  return response.status(200).send({ status: 'Registro atualizado com sucesso', data: nextBooks})
  } catch (error) { // tratamento de exceção,trata os erros ocorridos
    logger(error.nessage)
    return response.status(500).send({error: error?.message || e})
  }
}

exports.deleteByIdBooks = async (request, response) => {
  try { 
    const params = request.params

    const [previousBooks] = await database
    .select('*')
    .from('bookcase')
    .where({id: params.id})
    .limit(1)

    if(!previousBooks) {
      return response.status(404).send(`O registro com id ${params.id} não foi encontrado`)
    }
    const nextBooks = request.body
    console.log('author previousBooks Encontrado ===', previousBooks)
    console.log('author nextBooks ===', nextBooks)

    await database
    .delete({id: nextBooks.id})
    .from('bookcase')
    .where({id: previousBooks.id})

    return response.status(200).send({ status: 'Registro deletado com sucesso', data: previousBooks})
  } catch (error) {
    logger(error.nessage)
    return response.status(500).send({error: error?.message || e})
  }
}