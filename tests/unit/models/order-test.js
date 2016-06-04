import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';
import {
  testValidPropertyValues,
  testInvalidPropertyValues
} from '../../helpers/validate-properties';

moduleForModel('order', 'Unit | Model | order', {
  // Specify the other units that are required for this test.
  needs: ['ember-validations@validator:local/format',
          'ember-validations@validator:local/numericality',
          'ember-validations@validator:local/presence',
          'transform:dollars']
});

test('it exists', function(assert) {
  const model = this.subject();
  // const store = this.store();
  assert.ok(!!model);
});

test('it has attribute: account', function(assert) {
  const model = this.subject();
  const hasAttr = Object.keys(model.toJSON()).indexOf('account') > -1;
  assert.ok(hasAttr);
});

test('it has attribute: direction', function(assert) {
  const model = this.subject();
  const hasAttr = Object.keys(model.toJSON()).indexOf('direction') > -1;
  assert.ok(hasAttr);
});

test('it has attribute: order type', function(assert) {
  const model = this.subject();
  const hasAttr = Object.keys(model.toJSON()).indexOf('orderType') > -1;
  assert.ok(hasAttr);
});

test('it has attribute: price', function(assert) {
  const model = this.subject();
  const hasAttr = Object.keys(model.toJSON()).indexOf('price') > -1;
  assert.ok(hasAttr);
});

test('it has attribute: quantity', function(assert) {
  const model = this.subject();
  const hasAttr = Object.keys(model.toJSON()).indexOf('quantity') > -1;
  assert.ok(hasAttr);
});

test('it has attribute: symbol', function(assert) {
  const model = this.subject();
  const hasAttr = Object.keys(model.toJSON()).indexOf('symbol') > -1;
  assert.ok(hasAttr);
});

test('it has attribute: venue', function(assert) {
  const model = this.subject();
  const hasAttr = Object.keys(model.toJSON()).indexOf('venue') > -1;
  assert.ok(hasAttr);
});

testValidPropertyValues('account', ['foo']);
testInvalidPropertyValues('account', ['']);

testValidPropertyValues('direction', ['buy', 'sell']);
testInvalidPropertyValues('direction', ['', 'foo']);

testValidPropertyValues('orderType', ['fill-or-kill', 'immediate-or-cancel', 'limit', 'market']);
testInvalidPropertyValues('orderType', ['', 'foo']);

testValidPropertyValues('price', [1, 150]);
testInvalidPropertyValues('price', [0, 2.5]);

testValidPropertyValues('quantity', [1]);
testInvalidPropertyValues('quantity', [0, 1.5]);

testValidPropertyValues('symbol', ['foo']);
testInvalidPropertyValues('symbol', ['']);

testValidPropertyValues('venue', ['foo']);
testInvalidPropertyValues('venue', ['']);


test('it should be invalid', function(assert) {
  const model = this.subject();
  assert.equal(model.get('isValid'), false, 'order is valid');
});

test('it should be valid', function(assert) {
  const model = this.subject();
  Ember.run(function() {
    model.set('account', 'foo');
    model.set('direction', 'buy');
    model.set('orderType', 'limit');
    model.set('price', '25000');
    model.set('quantity', '100');
    model.set('symbol', 'foo');
    model.set('venue', 'foo');
  });
  assert.equal(model.get('isValid'), true, 'order is invalid');
});
