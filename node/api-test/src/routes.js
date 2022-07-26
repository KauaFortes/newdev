const express = require('express');

const routes = express.Router();

const IndexController = require('./controllers/IndexController'); 
const CoursesController = require('./controllers/CoursesController');
const instructorsController = require('./controllers/instructorsController');
const LessonsController = require('./controllers/LessonsController')



routes.get('/', IndexController.index);

routes.post('/courses', CoursesController.create);

routes.post('/instructors', instructorsController.create);

routes.post('/lessons', LessonsController.create);


/*routes.delete('/courses', CoursesController.delete);*/

module.exports = routes;

// lessons
// courses
// instructors