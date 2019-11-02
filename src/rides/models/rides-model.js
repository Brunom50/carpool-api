
/**
 * Module dependencies.
 */

import { AbstractModel } from 'core-api';
import { timestampPlugin } from 'objection-timestamps';
import config from 'config';
import guidPlugin from 'objection-guid';
import ridesSchema from 'rides/schemas/rides-schema';

/**
 * Database schema.
 */

const schema = config.get('database.schema');

/**
 * Guid Plugin.
 */

const guid = guidPlugin();

/**
 * Timestamp Plugin.
 */

const timestamp = timestampPlugin({
  created_at: 'createdAt',
  updated_at: 'updatedAt'
});

/**
 * Export `RidesModel`.
 */

export default class RidesModel extends timestamp(guid(AbstractModel)) {

  /**
   * Enabling timestamp plugin.
  */

  static timestamp = true;

  /**
   * Table Name.
   */

  static tableName = `${schema}.rides`;

  /**
   * JSON Schema.
   */

  static jsonSchema = ridesSchema;

  /**
   * Masks.
   */

  static masks = {
    public: []
  };

}
