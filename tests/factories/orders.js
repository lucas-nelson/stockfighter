import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('order', {
  default: {
    account: 'GAS68058614',
    direction: 'buy',
    order_type: 'limit',
    price: 25000,
    quantity: 100,
    symbol: 'CDSC',
    venue: 'YEHKEX'
  }
});
