import express, { Application } from 'express';
import cors from 'cors';

/** Middleware */
import { errorHandler, requestLogger } from './utils/middleware';

import bitcoinController from './controllers/bitcoinController';
import defaultController from './controllers/defaultController';

import { unknownEndpoint } from './utils/unknownEndpoint';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(requestLogger);

app.use(defaultController);
app.use(bitcoinController);

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;
