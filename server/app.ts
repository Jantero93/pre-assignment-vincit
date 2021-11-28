import express, { Application } from 'express';
import controller from './controllers/controller';

const app: Application = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(controller);

export default app;
