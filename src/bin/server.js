#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from 'index';
import config from 'config';
import debug from 'debugnyan';

/**
 * Options.
 */

const port = config.get('server.port');

/**
 * Logger.
 */

const logger = debug('carpool-api:server');

(() => {
  /**
   * Start http server.
   */

  app().listen(port);

  logger.info(`Listening on ${port}`);
})();

