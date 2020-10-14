import { Router } from 'express';

import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

const orphanagesController = new OrphanagesController();

routes.post('/orphanages', orphanagesController.create);

export default routes;
