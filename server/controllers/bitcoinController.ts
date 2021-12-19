/** Services */
import BitcoinService from '../services/bitcoinService';

/** Express */
import { Response, Request, Router, NextFunction } from 'express';

/** Utils */
import logger from '../utils/logger';

/** Types */
import { BitcoinPrice, BitcoinVolume } from 'common';

const API_BITCOIN: string = '/api/bitcoin';

const Controller: Router = Router();

Controller.get(
  `${API_BITCOIN}/downwardtrend`,
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { startDate, endDate } = req.query;

    if (isDatesValid(startDate as string, endDate as string)) {
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
      next(error);
    }
  }
);

Controller.get(
  `${API_BITCOIN}/highesttradingvolume`,
  async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const { startDate, endDate } = req.query;

    if (isDatesValid(startDate as string, endDate as string)) {
      res.status(422).send({ error: 'Invalid query' });
      logger.error('Invalid query at /bitcoin/highesttradinvolume', req.query);
      return;
    }

    const result: BitcoinVolume = await BitcoinService.highestTradingVolume(
      startDate as string,
      endDate as string
    );

    res.status(200).send(result);
  }
);

Controller.get(
  `${API_BITCOIN}/timemachine`,
  async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const { startDate, endDate } = req.query;

    if (isDatesValid(startDate as string, startDate as string)) {
      res.status(422).send({ error: 'Invalid query' });
      logger.error('Invalid query at /bitcoin/highesttradinvolume', req.query);
      return;
    }

    await BitcoinService.timeMachine(startDate as string, endDate as string);

    res.status(200).send('working...');
  }
);

const isDatesValid = (startDate: string, endDate: string): boolean =>
  !startDate || !endDate;

export default Controller;
