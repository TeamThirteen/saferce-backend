'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class InformationProvider extends Model {
  user() {
    return this.belongsTo('App/Models/User');
  }

  safe_items() {
    return this.belongsToMany('App/Models/SafeItem').pivotTable('safe_itens_information_providers');
  }
}

module.exports = InformationProvider;
