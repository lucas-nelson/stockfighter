import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { makeList, manualSetup } from 'ember-data-factory-guy';

moduleForComponent('order-list', 'Integration | Component | order list', {
  integration: true,

  beforeEach: function () {
    manualSetup(this.container);
  }
});

test('it renders a list of orders', function(assert) {
  this.set('orders', makeList('order', 2));
  this.render(hbs`{{order-list orders=orders}}`);

  assert.equal(this.$('.order').length, 2);
});
