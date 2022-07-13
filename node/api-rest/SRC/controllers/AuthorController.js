const database = require('../databases/knex')
const logger = require('../utils/logger')

exports.findAll = async (request, response) => {
try {
  const sql = await database.select('*').from('authors')

  console.log('sqle ->', sql)
  return response.status(200).send({authors: sql})
} catch (error) {
  logger(error.nessage)
  return response.status(500).send({ error: error?.message || e})
}
}

exports.create = async (request, response) => {
 try {
  await database('authors').insert(request.body)
  return response.status(200).send({
    status: 'success'
  })
 }  catch (error) {
  return response.status(500).send({ error: error?.message || e})
 }
}

exports.getById = async (request, response) => {
  try {
    const params = request.params;

    const [previousAuthor] = await database
      .select('*')
      .from('authors')
      .where({ id: params.id })
      .limit(1);

    if (!previousAuthor) {
      return response.status(404) // recurso não encontrado
        .send(`O registro com id: ${params.id} não foi encontrado!`);
    }
    return response
      .status(200)
      .send({ data: previousAuthor });
  } catch (error) {// tratamento de exceção, trata os erros que ocorrem
    
    return response.status(500).send({ error: error?.message || e });
  }
}

exports.put = async (request, response) => {
  try {
    const params = request.params
    // precisamos buscar no banco de dados, o possivel registro

    const [previosAuthor] = await database
    .select('*')
    .from('authors')
    .where({id: params.id})
    .limit(1) 
                                                          // ou.where('id', params.id)


    // se não existir, eu preciso informar o client que não exitste (nao encontrado)

    if(!previosAuthor) {         // recurso na encontrado
      return response.status(404).send(`O registro com id ${params.id} não foi encontrado`)
    }
    const nextAuthor = request.body
    console.log('author previosAuthor Encontrado ===', previosAuthor)
    console.log('author nextAuthor ===', nextAuthor)
    // capturar o valor do body, o qual o client quer atualizar e atualizar a informção no banco de dados

    await database
    .update({name: nextAuthor.name})
    .from('authors')
    .where({id: previosAuthor.id})

    // avisar o cliente que atualizamos o registro e retornar o registro atualizado
  return response.status(200).send({ status: 'Registro atualizado com sucesso', data: nextAuthor})
  } catch (error) { // tratamento de exceção,trata os erros ocorridos
    return response.status(500).send({error: error?.message || e})
  }
}

exports.deleteById = async (request, response) => {
  try { 
    const params = request.params

    const [previosAuthor] = await database
    .select('*')
    .from('authors')
    .where({id: params.id})
    .limit(1)

    if(!previosAuthor) {
      return response.status(404).send(`O registro com id ${params.id} não foi encontrado`)
    }
    const nextAuthor = request.body
    console.log('author previosAuthor Encontrado ===', previosAuthor)
    console.log('author nextAuthor ===', nextAuthor)

    await database
    .delete({id: nextAuthor.id})
    .from('authors')
    .where({id: previosAuthor.id})

    return response.status(200).send({ status: 'Registro deletado com sucesso', data: previosAuthor})
  } catch (e) {
    return response.status(500).send({error: error?.message || e})
  }
}