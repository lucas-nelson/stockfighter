import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  account: attr('string'),
  created_at: attr('date'),
  direction: attr('string'),
  orderType: attr('string'),
  price: attr('dollars'),
  quantity: attr('number'),
  symbol: attr('string'),
  updated_at: attr('date'),
  venue: attr('string')
});
