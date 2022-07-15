const express = require('express');

const routes = express.Router();

const IndexController = require('./controllers/IndexController'); 

routes.get('/', IndexController.index);

module.exports = routes;

// lessons
// courses
// instructors