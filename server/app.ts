import express, { Application } from 'express';
import cors from 'cors';

/** Middleware */
import { errorHandler, requestLogger } from './utils/middleware';

import bitcoinController from './controllers/bitcoinController';

import { unknownEndpoint } from './utils/unknownEndpoint';

const app: Application = express();

app.use(express.static('../client/dist'));

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(requestLogger);

app.use(bitcoinController);

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;
