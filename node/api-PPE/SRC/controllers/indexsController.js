exports.index = (request, response) => {
  console.log('API is available')
  return response.status(200).send('API is available ')
}
