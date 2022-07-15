const database = require('../databases/knex')
const logger = require('../utils/logger')

exports.findAllAulas = async (request, response) => {
  try {
    const sql = await database.select('*').from('aulasCase')
  
    console.log('sqle ->', sql)
    return response.status(200).send({aulasCase: sql})
  } catch (error) {
    logger(error.message)
    return response.status(500).send({ error: error?.message || e})
  }
}

exports.createAulas = async (request, response) => {
  try {
    await database('aulasCase').insert(request.body)
    return response.status(200).send({
      status: 'success'
    })
   }  catch (error) {
    logger(error.message)
    return response.status(500).send({ error: error?.message || e})
   }
}

exports.getByIdAulas = async (request, response) => {
  try {
    const params = request.params;

    const [previousAulas] = await database
      .select('*')
      .from('aulasCase')
      .where({ id: params.id })
      .limit(1);

    if (!previousAulas) {
      return response.status(404) 
        .send(`O registro com id: ${params.id} não foi encontrado!`);
    }
    return response
      .status(200)
      .send({ data: previousAulas });
  } catch (error) {
    logger(error.message)
    return response.status(500).send({ error: error?.message || e });
  }
}

exports.putAulas = async (request, response) => {
  try {
    const params = request.params
   

    const [previousAulas] = await database
    .select('*')
    .from('aulasCase')
    .where({id: params.id})
    .limit(1) 

    if(!previousAulas) {         
      return response.status(404).send(`O registro com id ${params.id} não foi encontrado`)
    }
    const nextAulas = request.body
    console.log('author previousAulas Encontrado ===', previousAulas)
    console.log('author nextAulas ===', nextAulas)
  
    await database
    .update({nameAula: nextAulas.nameAula})
    .from('aulasCase')
    .where({id: previousAulas.id})

  return response.status(200).send({ status: 'Registro atualizado com sucesso', data: nextAulas})
  } catch (error) { // tratamento de exceção,trata os erros ocorridos
    logger(error.message)
    return response.status(500).send({error: error?.message || e})
  }
}

exports.deleteByIdAulas = async (request, response) => {
  try { 
    const params = request.params

    const [previousAulas] = await database
    .select('*')
    .from('aulasCase')
    .where({id: params.id})
    .limit(1)

    if(!previousAulas) {
      return response.status(404).send(`O registro com id ${params.id} não foi encontrado`)
    }
    const nextAulas = request.body
    console.log('author previousAulas Encontrado ===', previousAulas)
    console.log('author nextAulas ===', nextAulas)

    await database
    .delete({id: nextAulas.id})
    .from('aulasCase')
    .where({id: previousAulas.id})

    return response.status(200).send({ status: 'Registro deletado com sucesso', data: previousAulas})
  } catch (error) {
    logger(error.message)
    return response.status(500).send({error: error?.message || e})
  }
}