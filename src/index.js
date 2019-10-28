
/**
 * Module dependencies.
 */

import { app } from 'core-api';
import config from 'config';
import router from 'core/router';

/**
 * Export `app`.
 */

export default () => {
  // Initialize Carpool API app.
  const myApp = app({
    cors: config.get('cors'),
    loggerOptions: {
      name: 'carpool-api:server'
    }
  });

  // Router.
  myApp.use(router.routes());

  return myApp;
};
