const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')
const recipes = require('./recipes.json')

const getRecipes = (request, response) => {
  
  if (request.url === '/receitas') {
    let {name, ingre, remove} = URL.parse(request.url, true).query
  
  if (ingre) {
  ingre = ingre.split(',')
  }

  if (name) {
    const recipe = {
    name, ingre
    }
  

    if (remove) {
      const found = recipes.filter(recipe => String(recipe.name) === String(name))
      recipes = recipes.filter(recipe => String(recipe.name) !== String(name))
    

    if (!found.length) {
      return response.end('Usuario não encontrado!')
    } 
  } else {
      message = 'Registro salvo com sucesso'
      recipes.push(recipe)
    }

  
  fs.writeFile(
    path.join(__dirname, 'recipes.json'),
    JSON.stringify(recipes),
    (error) => {
      if (error) return
      
      console.log('salvou o registro com sucesso')
      response.end(JSON.stringify({
        status: message,
        data: recipe,
      }))
    }
    )
  } else {
    response.end(JSON.stringify(recipes))
  }}

  
}
const server = http.createServer(getRecipes)

server.listen(3001, () => {
  console.log('API listening on http://localhost:3001')
})
