import BitcoinService from '../services/bitcoinService';
import logger from '../utils/logger';
import { Response, Request, Router } from 'express';

const API_BITCOIN: string = '/api/bitcoin';

const Controller: Router = Router();

Controller.get(
  `${API_BITCOIN}/downwardtrend`,
  (req: Request, res: Response): void => {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      res.status(422).send({ error: 'Invalid query' });
      logger.error('Invalid query at /bitcoin/downwardtrend', req.query);
      return;
    }

    try {
      BitcoinService.longestDownwardTrend(
        startDate as string,
        endDate as string
      );
      res.status(200).send({ success: 'yes!' });
    } catch (error) {
      res.status(503).send(`Bitcoin API can't handle request`);
      logger.error(error);
    }
  }
);

export default Controller;
