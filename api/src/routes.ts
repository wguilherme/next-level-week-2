import express, { response } from 'express';
import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();



//classes
routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);
//connections
routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;