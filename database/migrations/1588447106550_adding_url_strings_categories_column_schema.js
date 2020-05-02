'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddingUrlStringsCategoriesColumnSchema extends Schema {
  up() {
    this.table('categories', (table) => {
      table.string('image_url').notNullable();
    });
  }

  down() {
    this.table('categories', (table) => {
      table.dropColumn('image_url');
    });
  }
}

module.exports = AddingUrlStringsCategoriesColumnSchema;
