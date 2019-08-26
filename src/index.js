import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import env from 'dotenv';
import mongoose from 'mongoose';
import log from 'fancy-log';

import routes from './routes';

env.config();

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});

app.use(logger('dev'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cors());

app.use('/api/v1', routes);

const server = app.listen(PORT, () => log.info(`API listening at port ${PORT}`));

export default server;
