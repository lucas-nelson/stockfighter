import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  account: attr('string'),
  direction: attr('string'),
  orderType: attr('string'),
  price: attr('dollars'),
  quantity: attr('number'),
  symbol: attr('string'),
  venue: attr('string')
});
