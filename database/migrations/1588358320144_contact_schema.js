'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ContactSchema extends Schema {
  up() {
    this.create('contacts', (table) => {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table
        .integer('provider_id')
        .unsigned()
        .references('id')
        .inTable('information_providers');
      table.integer('status').unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop('contacts');
  }
}

module.exports = ContactSchema;
