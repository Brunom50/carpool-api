
/**
 * Module dependencies.
 */

import { Model } from 'objection';
import config from 'config';
import knex from 'core/database/knex.js';
import models from 'core/models/index.js';

/**
 * Database schema.
 */

const schema = config.get('database.schema');

/**
 * Export `createAppSchema`.
 */

export const createAppSchema = () => knex.raw(`CREATE SCHEMA IF NOT EXISTS "${schema}"`);

/**
 * Export `createAppExtensions`.
 */

export const createAppExtensions = () => knex.raw('CREATE EXTENSION IF NOT EXISTS citext');

/**
 * Export `dropModelsTables`.
 */

export const dropModelsTables = async () => {
  for (let i = models.length - 1; i >= 0; i--) {
    await knex.schema.dropTableIfExists(models[i].tableName);
  }
};

/**
 * Export `clearDatabase`.
 */

export const clearDatabase = async () => {
  for (let i = models.length - 1; i >= 0; i--) {
    await models[i].query().del();
  }
};

/**
 * Export `initializeDatabase`.
 */

export const initializeDatabase = async () => {
  // Drop models tables.
  await dropModelsTables();

  // Create application schema.
  await createAppSchema();

  // Create extensions.
  await createAppExtensions();

  // Run migrations.
  await knex.migrate.latest();
};

/**
 * Export `setupDatabase`.
 */

export const setupDatabase = () => Model.knex(knex);
