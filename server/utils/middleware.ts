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

export const errorHandler = (
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction
): void => {
  logger.info('errorHandler');
  logger.error(error.message);
  response.status(400).send(error.message);
};
