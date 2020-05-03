'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class InformationProvidersRenameColumnSchema extends Schema {
  up() {
    this.table('information_providers', (table) => {
      table.renameColumn('services_producsts', 'services_products');
    });
  }

  down() {
    this.table('information_providers', (table) => {
      table.renameColumn('services_products', 'services_producsts');
    });
  }
}

module.exports = InformationProvidersRenameColumnSchema;
