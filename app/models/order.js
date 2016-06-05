import EmberValidations from 'ember-validations';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend(EmberValidations, {
  account: attr('string'),
  created_at: attr('date'),
  direction: attr('string'),
  orderType: attr('string'),
  price: attr('dollars'),
  quantity: attr('number'),
  symbol: attr('string'),
  updated_at: attr('date'),
  venue: attr('string'),

  validations: {
    account: { presence: true },
    direction: { format: { with: /^(buy|sell)$/ } },
    orderType: { format: { with: /^(fill-or-kill|immediate-or-cancel|limit|market)$/ } },
    price: { numericality: { greaterThan: 0, onlyInteger: true } },
    quantity: { numericality: { greaterThan: 0, onlyInteger: true } },
    symbol: { presence: true },
    venue: { presence: true }
  }
});
