/**
 * Module dependencies.
 */

import config from 'config';
import debug from 'debugnyan';
import knex from 'knex';

/**
 * Database configuration.
 */

const configuration = config.get('database');

/**
 * Logger.
 */

const logger = debug('api-core:database');

/**
 * Log connection.
 */

logger.info('Connecting to database', JSON.stringify(configuration));

/**
 * Export `knex`.
 */

export default knex(config.get('database'));
