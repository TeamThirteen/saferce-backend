'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class SafeItem extends Model {
  information_provider() {
    return this.belongsToMany('App/Models/InformationProvider');
  }
}

module.exports = SafeItem;
