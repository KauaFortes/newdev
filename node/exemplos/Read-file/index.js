const http = require('http')
const URL = require('url')
const user = require('./user.json')

http
  .createServer((request, response) => {
    //responde para o cliente
    const {name, lastName, age} = URL.parse(request.url, true).query
    
    if (name || lastName || age) {
      console.log('query', name, lastName, age)
    }

    response.end(JSON.stringify(user))
  })
  .listen(3001, () => {
    console.log('API is running on port 3001')
  })
