import { Response, Request, Router } from 'express';

const API_BITCOIN: string = '/api/bitcoin';

const controller: Router = Router();

controller.get(`${API_BITCOIN}/test`, (_req: Request, res: Response) => {
  res.send('infinity money');
});

controller.get(
  `${API_BITCOIN}/downwardtrend`,
  (req: Request, res: Response) => {
    console.log(`req.query`, req.query);
    res.status(200).send({ success: 'yes!' });
  }
);

controller.get('');

export default controller;
