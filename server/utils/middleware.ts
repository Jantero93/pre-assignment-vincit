import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

export const requestLogger = (
  request: Request,
  _response: Response,
  next: NextFunction
): void => {
  logger.info('Timestamp ', new Date().toLocaleTimeString());
  logger.info('Method: ', request.method);
  logger.info('Path: ', request.path);
  logger.info('Queries', request.query);
  logger.info('---');
  next();
};
