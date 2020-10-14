import { Router } from 'express';

import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

const orphanagesController = new OrphanagesController();

routes.get('/orphanages', orphanagesController.index);
routes.get('/orphanages/:id', orphanagesController.show);
routes.post('/orphanages', orphanagesController.create);

export default routes;
