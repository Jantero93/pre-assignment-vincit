import { Response, Request, Router } from 'express';

const controller: Router = Router();

controller.get('/', (_req: Request, res: Response) => {
  res.send('root endpoint');
});

export default controller;
