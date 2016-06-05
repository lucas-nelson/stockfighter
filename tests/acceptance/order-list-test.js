import { test } from 'qunit';
import moduleForAcceptance from 'stockfighter/tests/helpers/module-for-acceptance';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';

moduleForAcceptance('Acceptance | orders');

test('visiting /orders', function(assert) {
  TestHelper.mockFindAll('order', 0);

  visit('/orders');

  andThen(function() {
    assert.equal(currentURL(), '/orders');
  });
});

test('should show list of orders', function(assert) {
  TestHelper.mockFindAll('order', 3);

  visit('/orders');

  andThen(function() {
    assert.equal(find('.order').length, 3);
  });
});
