const express = require('express');
const routes = express.Router()

const indexController = require('./controllers/IndexsController')
const aulaController = require('./controllers/aulasController')
const cursoController = require('./controllers/cursosController')
const descriControlle = require('./controllers/descrisControlle')
const linkController = require('./controllers/linksController')
const profController = require('./controllers/profsController')
const tituloController = require('./controllers/titulosController')

// rotas index
routes.get('/', indexController.index)

// rotas aulas

// rotas curso

// rotas descrição

// rotas link

routes.get('/links', linkController.findAll)
routes.post('/links', linkController.create)

// rotas 
routes.get('/links/:id', linkController.getById)
routes.delete('/links/:id', linkController.deleteById)
routes.put('/links/:id', linkController.put)


// rotas prof

// rotas titulo
