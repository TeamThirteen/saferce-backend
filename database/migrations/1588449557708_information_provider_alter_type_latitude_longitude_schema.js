'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class InformationProviderAlterTypeLatitudeLongitudeSchema extends Schema {
  up() {
    this.table('information_providers', (table) => {
      table.string('longitude', 20).notNullable().alter();
      table.string('latitude', 20).notNullable().alter();
    });
  }

  down() {
    this.table('information_providers', (table) => {
      // reverse alternations
    });
  }
}

module.exports = InformationProviderAlterTypeLatitudeLongitudeSchema;
