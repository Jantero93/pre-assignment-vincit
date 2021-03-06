/** Services */
import BitcoinService from '../services/bitcoinService';

/** Express */
import { Response, Request, Router } from 'express';

/** Utils */
import logger from '../utils/logger';

/** Types */
import { BitcoinPrice, BitcoinVolume } from 'common';

const API_BITCOIN: string = '/api/bitcoin';

const Controller: Router = Router();

Controller.get(
  `${API_BITCOIN}/downwardtrend`,
  async (req: Request, res: Response): Promise<void> => {
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
      res.status(400).send({ error: 'Geckocoin query failed' });
    }
  }
);

Controller.get(
  `${API_BITCOIN}/highesttradingvolume`,
  async (req: Request, res: Response): Promise<void> => {
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
  async (req: Request, res: Response): Promise<void> => {
    const { startDate, endDate } = req.query;

    if (isDatesValid(startDate as string, startDate as string)) {
      res.status(422).send({ error: 'Invalid query' });
      logger.error('Invalid query at /bitcoin/highesttradinvolume', req.query);
      return;
    }

    const response: BitcoinPrice[] = await BitcoinService.timeMachine(
      startDate as string,
      endDate as string
    );

    res.status(200).send(response);
  }
);

const isDatesValid = (startDate: string, endDate: string): boolean =>
  !startDate || !endDate;

export default Controller;
