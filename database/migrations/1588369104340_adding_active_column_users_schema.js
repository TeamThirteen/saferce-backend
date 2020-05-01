'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddingActiveColumnUsersSchema extends Schema {
  up() {
    this.table('users', (table) => {
      table.boolean('active').defaultTo(true);
    });
  }
}

module.exports = AddingActiveColumnUsersSchema;
