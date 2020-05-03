'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class SafeItemsColorAndIconColumnsSchema extends Schema {
  up() {
    this.table('safe_items', (table) => {
      table.string('color').notNullable();
      table.string('icon').notNullable();
    });
  }

  down() {
    this.table('safe_items', (table) => {
      table.dropColumn('color');
      table.dropColumn('icon');
    });
  }
}

module.exports = SafeItemsColorAndIconColumnsSchema;
