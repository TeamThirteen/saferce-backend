'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class EvaluationSchema extends Schema {
  up() {
    this.create('evaluations', (table) => {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table
        .integer('provider_id')
        .unsigned()
        .references('id')
        .inTable('information_providers');
      table.integer('rating');
      table.string('comment', 140);
      table.string('answer', 140);
      table.timestamps();
    });
  }

  down() {
    this.drop('evaluations');
  }
}

module.exports = EvaluationSchema;
