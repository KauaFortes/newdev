const database = require('../databases/knex')
const logger = require('../utils/logger')

exports.findAllProfs = async (request, response) => {
  try {
    const sql = await database.select('*').from('aulasCase')
  
    console.log('sqle ->', sql)
    return response.status(200).send({profsCase: sql})
  } catch (error) {
    logger(error.message)
    return response.status(500).send({ error: error?.message || e})
  }
}

exports.createProfs = async (request, response) => {
  try {
    await database('profsCase').insert(request.body)
    return response.status(200).send({
      status: 'success'
    })
   }  catch (error) {
    logger(error.message)
    return response.status(500).send({ error: error?.message || e})
   }
}

exports.getByIdProfs = async (request, response) => {
  try {
    const params = request.params;

    const [previousProfs] = await database
      .select('*')
      .from('profsCase')
      .where({ id: params.id })
      .limit(1);

    if (!previousProfs) {
      return response.status(404) 
        .send(`O registro com id: ${params.id} não foi encontrado!`);
    }
    return response
      .status(200)
      .send({ data: previousProfs });
  } catch (error) {
    logger(error.message)
    return response.status(500).send({ error: error?.message || e });
  }
}

exports.putProfs = async (request, response) => {
  try {
    const params = request.params
   

    const [previousProfs] = await database
    .select('*')
    .from('profsCase')
    .where({id: params.id})
    .limit(1) 

    if(!previousProfs) {         
      return response.status(404).send(`O registro com id ${params.id} não foi encontrado`)
    }
    const nextProfs = request.body
    console.log('author previousProfs Encontrado ===', previousProfs)
    console.log('author nextProfs ===', nextProfs)
  
    await database
    .update({name: nextProfs.name})
    .from('profsCase')
    .where({id: previousProfs.id})

  return response.status(200).send({ status: 'Registro atualizado com sucesso', data: nextProfs})
  } catch (error) { // tratamento de exceção,trata os erros ocorridos
    logger(error.message)
    return response.status(500).send({error: error?.message || e})
  }
}

exports.deleteByIdProfs = async (request, response) => {
  try { 
    const params = request.params

    const [previousProfs] = await database
    .select('*')
    .from('profsCase')
    .where({id: params.id})
    .limit(1)

    if(!previousProfs) {
      return response.status(404).send(`O registro com id ${params.id} não foi encontrado`)
    }
    const nextProfs = request.body
    console.log('author previousProfs Encontrado ===', previousProfs)
    console.log('author nextProfs ===', nextProfs)

    await database
    .delete({id: nextProfs.id})
    .from('profsCase')
    .where({id: previousProfs.id})

    return response.status(200).send({ status: 'Registro deletado com sucesso', data: previousProfs})
  } catch (error) {
    logger(error.message)
    return response.status(500).send({error: error?.message || e})
  }
}