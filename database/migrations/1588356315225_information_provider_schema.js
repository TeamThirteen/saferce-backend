'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class InformationProviderSchema extends Schema {
  up() {
    this.create('information_providers', (table) => {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table
        .integer('category_id')
        .unsigned()
        .references('id')
        .inTable('categories');
      table.integer('type_id').unsigned().references('id').inTable('types');
      table.boolean('remote_service');
      table.string('services_producsts', 200);
      table.string('whatsapp', 11);
      table.string('phone', 11);
      table.text('url_page_promotion');
      table.string('address', 100);
      table.integer('number');
      table.string('district', 100);
      table.string('city', 100);
      table.string('state', 2);
      table.string('cep', 8).notNullable();
      table.decimal('longitude', 10, 8).notNullable();
      table.decimal('latitude', 11, 8).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('information_providers');
  }
}

module.exports = InformationProviderSchema;
