exports.findAllBooks = (request, response) => {
  const query = request.query
  console.log('Query strign books', query)
  return response.status(200).send('está no books no metodo get')
}

exports.createBooks = (request, response) => {
  console.log('recebendo dados', request.body)
  return response.status(200).send('está no books no metodo POST')
}

exports.getByIdBooks = (request, response) => {
  const params = request.params
  console.log('Query params books', params)
  return response.status(200).send(`acessando  recurso /books/:id no metodo get by id ${params.id}`)
}

exports.patchBooks = (request, response) => {
  const params = request.params
  console.log('Query params books', params)
  return response.status(200).send(`acessando  recurso /books/:id no metodo get by id ${params.id}`)
}

exports.putBooks = (request, response) => {
  const params = request.params
  console.log('Query params books', params)
  return response.status(200).send(`acessando  recurso /books/:id no metodo get by id ${params.id}`)
}

exports.deleteByIdBooks = (request, response) => {
  const params = request.params
  console.log('Query params books', params)
  return response.status(200).send(`acessando  recurso /books/:id no metodo get by id ${params.id}`)
}