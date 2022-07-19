const express = require('express');

const routes = express.Router();

const {
  IndexController, 
  CoursesController, 
  instructorsController, 
  lessonsController 
} = require('./controllers')

routes.get('/', IndexController.index);

routes.post('/courses', CoursesController.create);

routes.post('/instructors', instructorsController.create);

routes.post('/lessons', lessonsController.create);

/*routes.delete('/courses', CoursesController.delete);*/

module.exports = routes;

// lessons
// courses
// instructors