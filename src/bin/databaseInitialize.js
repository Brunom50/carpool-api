#!/usr/bin/env node

/**
 * Module dependencies.
 */

import { initializeDatabase } from 'core/database';

/**
 * Exit process.
 */

const exit = process.exit;

/**
 * Initialize database.
 */

(async () => {
  try {
    await initializeDatabase();

    exit();
  } catch (e) {
    console.log(e); // eslint-disable-line no-console

    exit(1);
  }
})();
