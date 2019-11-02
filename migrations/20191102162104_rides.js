
/**
 * Module dependencies.
 */

const config = require('config');

/**
 * Database schema.
 */

const schema = config.get('database.schema');

/**
 * Up.
 */

exports.up = function(knex) {
  return knex.schema
    .withSchema(schema)
    .createTable('rides', table => {
      table.uuid('id').notNullable();
      table.uuid('scale_id').unique();
      table.string('origin').notNullable();
      table.string('destination').notNullable();
      table.string('distance').notNullable();
      table.datetime('departure_time').notNullable();
      table.datetime('arrival_time').notNullable();
      table.datetime('created_at').notNullable();
      table.datetime('updated_at').notNullable();
    });
};

/**
 * Down.
 */

exports.down = function(knex) {
  return knex.schema
    .withSchema(schema)
    .dropTable('rides');
};
