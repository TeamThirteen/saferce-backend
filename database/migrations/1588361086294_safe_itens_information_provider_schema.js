'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class SafeItensInformationProviderSchema extends Schema {
  up() {
    this.create('safe_itens_information_providers', (table) => {
      table.increments();
      table.integer('information_provider_id').unsigned().references('id').inTable('information_providers');
      table.integer('safe_item_id').unsigned().references('id').inTable('safe_items');
      table.timestamps();
    });
  }

  down() {
    this.drop('safe_itens_information_providers');
  }
}

module.exports = SafeItensInformationProviderSchema;
