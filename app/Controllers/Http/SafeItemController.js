'use strict';

const SafeItem = use('App/Models/SafeItem');

class SafeItemController {
  async index() {
    const safeitems = await SafeItem.all();

    return safeitems;
  }
}

module.exports = SafeItemController;
