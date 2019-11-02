#!/usr/bin/env node

/**
 * Module dependencies.
 */

import { createAppSchema } from 'core/database';

/**
 * Exit process.
 */

const exit = process.exit;

/**
 * Initialize database.
 */

(async () => {
  await createAppSchema();

  exit();
})();
