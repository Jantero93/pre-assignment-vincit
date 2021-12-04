import { Response, Request, Router } from 'express';
import logger from './logger';

export const unknownEndpoint: Router = Router();

unknownEndpoint.get('*', (_req: Request, res: Response) => {
  res.status(404).json({ error: 'Unknown endpoint' });
  logger.error('Unknown endpoint reached');
});
