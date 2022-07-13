const express = require('express');
const routes = express.Router()

const indexController = require('./controllers/IndexController')
const AuthorController = require('./controllers/AuthorController')
const BooksController = require('./controllers/BooksController')


// rotas index
routes.get('/', indexController.index)

// rotas autores
routes.get('/authors', AuthorController.findAll)
routes.post('/authors', AuthorController.create)

// rotas 
routes.get('/authors/:id', AuthorController.getById)
routes.delete('/authors/:id', AuthorController.deleteById)
routes.put('/authors/:id', AuthorController.put)

// rotas de livros
routes.get('/books', BooksController.findAllBooks)
routes.post('/books', BooksController.createBooks)

routes.get('/books/:id', BooksController.getByIdBooks)
routes.delete('/books/:id', BooksController.deleteByIdBooks)
routes.put('/books/:id', BooksController.putBooks)




module.exports = routes