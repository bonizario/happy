import { Router } from 'express';

const routes = Router();

routes.post('/orphanages', (request, response) => {
  return response.send();
});

export default routes;
