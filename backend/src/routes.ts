import { Router } from 'express';

import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

const orphanagesController = new OrphanagesController();

routes.get('/orphanages', orphanagesController.index);
routes.post('/orphanages', orphanagesController.create);

export default routes;
