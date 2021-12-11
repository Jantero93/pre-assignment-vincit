import BitcoinService from '../services/bitcoinService';
import logger from '../utils/logger';
import { Response, Request, Router } from 'express';

import { BitcoinPrice } from 'common';

const API_BITCOIN: string = '/api/bitcoin';

const Controller: Router = Router();

Controller.get(
  `${API_BITCOIN}/downwardtrend`,
  async (req: Request, res: Response): Promise<void> => {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      res.status(422).send({ error: 'Invalid query' });
      logger.error('Invalid query at /bitcoin/downwardtrend', req.query);
      return;
    }

    try {
      const response: BitcoinPrice[] =
        await BitcoinService.longestDownwardTrend(
          startDate as string,
          endDate as string
        );
      res.status(200).send(response);
    } catch (error) {
      res.status(503).send(`Bitcoin API can't handle request`);
      logger.error(error);
    }
  }
);

export default Controller;
