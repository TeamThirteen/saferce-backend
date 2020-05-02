'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class EvaluationSafeItensDropSchema extends Schema {
  up() {
    this.drop('evaluations_safe_items');
  }

  down() {
    this.table('evaluations_safe_items', (table) => {
      // reverse alternations
    });
  }
}

module.exports = EvaluationSafeItensDropSchema;
