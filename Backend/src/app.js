// ONDE FICA CONFIGURADO O SERVIDOR EXPRESS
import 'dotenv/config';

import express from 'express';
import path from 'path';
import * as Sentry from '@sentry/node';
import Youch from 'youch';
import 'express-async-errors';

import routes from './routes';
import sentryConfig from './config/sentry';

import './database';

class App {
  // METODO EXECUTADO AUTOMATICAMENTE TODA VEZ QUE O APP E CHAMADO
  constructor() {
    this.server = express();

    Sentry.init(sentryConfig);

    // E PRECISO COLOCAR NO CONSTRUTOR, SE NAO NUNCA SERAO CHAMADOS
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

// EXPORTA UMA NOVA INSTANCIA DE APP
export default new App().server;
