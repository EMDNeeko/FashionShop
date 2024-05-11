const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/info-user', services.info_user)
route.get('/add-user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user)


route.get('/job', services.jobRoutes);
route.get('/update-job', services.update_job)
route.get('/add-job', services.add_job)
// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

route.post('/api/jobs', controller.createJ);
route.get('/api/jobs', controller.findJ);
route.put('/api/jobs/:id', controller.updateJ);
route.delete('/api/jobs/:id', controller.deleteJ);

route.get('/login', services.login);


module.exports = route