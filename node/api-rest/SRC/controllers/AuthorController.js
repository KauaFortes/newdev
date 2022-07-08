exports.findAll = (request, response) => {
  const query = request.query
  console.log('Query strign authors', query)
  return response.status(200).send('está no authors no metodo get')
}

exports.create = (request, response) => {
  console.log('recebendo dados', request.body)
  return response.status(200).send('está no authors no metodo POST')
}

exports.getById = (request, response) => {
  const params = request.params
  console.log('Query params authors', params)
  return response.status(200).send(`acessando  recurso /authors/:id no metodo get by id ${params.id}`)
}

exports.patch = (request, response) => {
  const params = request.params
  console.log('Query params authors', params)
  return response.status(200).send(`acessando  recurso /authors/:id no metodo patch by id ${params.id}`)
}

exports.put = (request, response) => {
  const params = request.params
  console.log('Query params authors', params)
  return response.status(200).send(`acessando  recurso /authors/:id no metodo put by id ${params.id}`)
}

exports.deleteById = (request, response) => {
  const params = request.params
  console.log('Query params authors', params)
  return response.status(200).send(`acessando  recurso /authors/:id no metodo DELETE by id ${params.id}`)
}