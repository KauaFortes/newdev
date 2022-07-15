const database = require('../databases/knex')
const logger = require('../utils/logger')

exports.findAllCursos = async (request, response) => {
  try {
    const sql = await database
    .select(
      ['cursosCase.id', 'cursosCase.nameCurso', 'authors.name as author Name']
    )
    .from('cursosCase')
    .innerJoin('profsCase', 'authors.id', 'cursosCase.authorID')

    sql.forEach(author =>{
      console.log('->>', author['author Name'])
      // camelCase
    })

    console.log('sqle ->', sql)
    return response.status(200).send({cursosCase: sql})
  } catch (error) {
    logger(error.message)
    return response.status(500).send({ error: error?.message || e})
  }
}

exports.createCursos = async (request, response) => {
  try {
    await database('cursosCase').insert(request.body)
    return response.status(200).send({
      status: 'success'
    })
   }  catch (error) {
    logger(error.message)
    return response.status(500).send({ error: error?.message || e})
   }
}

exports.getByIdCursos = async (request, response) => {
  try {
    const params = request.params;

    const [previousCursos] = await database
      .select('*')
      .from('cursosCase')
      .where({ id: params.id })
      .limit(1);

    if (!previousCursos) {
      return response.status(404) 
        .send(`O registro com id: ${params.id} não foi encontrado!`);
    }
    return response
      .status(200)
      .send({ data: previousCursos });
  } catch (error) {
    logger(error.message)
    return response.status(500).send({ error: error?.message || e });
  }
}

exports.putCursos = async (request, response) => {
  try {
    const params = request.params
   

    const [previousCursos] = await database
    .select('*')
    .from('cursosCase')
    .where({id: params.id})
    .limit(1) 

    if(!previousCursos) {         
      return response.status(404).send(`O registro com id ${params.id} não foi encontrado`)
    }
    const nextCursos = request.body
    console.log('author previousCursos Encontrado ===', previousCursos)
    console.log('author nextCursos ===', nextCursos)
  
    await database
    .update({nameCurso: nextCursos.nameCurso})
    .from('cursosCase')
    .where({id: previousCursos.id})

  return response.status(200).send({ status: 'Registro atualizado com sucesso', data: nextCursos})
  } catch (error) { // tratamento de exceção,trata os erros ocorridos
    logger(error.message)
    return response.status(500).send({error: error?.message || e})
  }
}

exports.deleteByIdCursos = async (request, response) => {
  try { 
    const params = request.params

    const [previousCursos] = await database
    .select('*')
    .from('cursosCase')
    .where({id: params.id})
    .limit(1)

    if(!previousCursos) {
      return response.status(404).send(`O registro com id ${params.id} não foi encontrado`)
    }
    const nextCursos = request.body
    console.log('author previousCursos Encontrado ===', previousCursos)
    console.log('author nextCursos ===', nextCursos)

    await database
    .delete({id: nextCursos.id})
    .from('cursosCase')
    .where({id: previousCursos.id})

    return response.status(200).send({ status: 'Registro deletado com sucesso', data: previousCursos})
  } catch (error) {
    logger(error.message)
    return response.status(500).send({error: error?.message || e})
  }
}