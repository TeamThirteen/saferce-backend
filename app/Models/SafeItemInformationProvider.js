'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class SafeItemInformationProvider extends Model {
  provider() {
    return this.belongsToMany('App/Models/InformationProvider');
  }
}

module.exports = SafeItemInformationProvider;
