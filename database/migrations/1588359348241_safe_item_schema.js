'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class SafeItemSchema extends Schema {
  up() {
    this.create('safe_items', (table) => {
      table.increments();
      table.string('description', 100);
      table.integer('type_id').unsigned().references('id').inTable('types');
      table.timestamps();
    });
  }

  down() {
    this.drop('safe_items');
  }
}

module.exports = SafeItemSchema;
