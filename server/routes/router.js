const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');
const controllerPago = require('../controller/controllerPago');
const controllerReceta = require('../controller/controllerReceta');

/**
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes);

/**
 * @description para add cita
 * @method GET /add-cita
 */
route.get('/add-cita', services.add_cita)

/**
 * @description para update cita
 * @method GET /update-cita
 */
route.get('/update-cita', services.update_cita)

/**
 * @description para add pago
 * @method GET /add-pago
 */
route.get('/add-pago', services.add_pago)

 /**
 * @description para add receta
 * @method GET /add-receta
 */
route.get('/add-receta', services.add_receta)

// API
route.post('/api/citas',controller.create);
route.get('/api/citas',controller.find);
route.put('/api/citas/:id',controller.update);
route.delete('/api/citas/:id',controller.delete);

route.post('/add-pago',controllerPago.create);

route.post('/add-receta',controllerReceta.create);


module.exports = route