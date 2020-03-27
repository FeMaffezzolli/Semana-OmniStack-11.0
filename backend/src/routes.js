const express = require('express');

const routes = express.Router();

// controllers
const OngController = require('./controllers/OngController');
const HealthCheckController = require('./controllers/HealthCheckController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// routes
routes.get('/', HealthCheckController.show);

routes.post('/session', SessionController.create);

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index);

module.exports = routes;