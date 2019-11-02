
/**
 * Module dependencies.
 */

import rides from 'rides/models/rides-model';

/**
 * `models`
 *
 * The order of the models considers their dependency level.
 * This way, models which are references of another model should be assigned after it.
 */

export default [rides];
