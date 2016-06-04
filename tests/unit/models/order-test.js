import { moduleForModel, test } from 'ember-qunit';

moduleForModel('order', 'Unit | Model | order', {
  // Specify the other units that are required for this test.
  needs: ['transform:dollars']
});

test('it exists', function(assert) {
  const model = this.subject();
  // const store = this.store();
  assert.ok(!!model);
});

test('it has attribute: account', function(assert) {
  const model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('account') > -1;
  assert.ok(hasAttr);
});

test('it has attribute: direction', function(assert) {
  const model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('direction') > -1;
  assert.ok(hasAttr);
});

test('it has attribute: order type', function(assert) {
  const model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('orderType') > -1;
  assert.ok(hasAttr);
});

test('it has attribute: price', function(assert) {
  const model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('price') > -1;
  assert.ok(hasAttr);
});

test('it has attribute: quantity', function(assert) {
  const model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('quantity') > -1;
  assert.ok(hasAttr);
});

test('it has attribute: symbol', function(assert) {
  const model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('symbol') > -1;
  assert.ok(hasAttr);
});

test('it has attribute: venue', function(assert) {
  const model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('venue') > -1;
  assert.ok(hasAttr);
});
