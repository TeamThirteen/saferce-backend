'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class EvaluationsSafeItemSchema extends Schema {
  up() {
    this.create('evaluations_safe_items', (table) => {
      table.increments();
      table
        .integer('evaluations_id')
        .unsigned()
        .references('id')
        .inTable('evaluations');
      table
        .integer('safe_items_id')
        .unsigned()
        .references('id')
        .inTable('safe_items');
      table.timestamps();
    });
  }

  down() {
    this.drop('evaluations_safe_items');
  }
}

module.exports = EvaluationsSafeItemSchema;
