'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class InformationProvidersAddingTitleSchema extends Schema {
  up() {
    this.table('information_providers', (table) => {
      table.string('title').notNullable();
    });
  }

  down() {
    this.table('information_providers', (table) => {
      table.dropColumn('title');
    });
  }
}

module.exports = InformationProvidersAddingTitleSchema;
