import { moduleFor, test } from 'ember-qunit';

moduleFor('transform:dollars', 'Unit | Transform | dollars', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  const transform = this.subject();
  assert.ok(!!transform);
});

test('it deserializes cents back to dollars', function(assert) {
  const transform = this.subject();
  const deserialized = transform.deserialize(150);
  assert.equal(deserialized, 1.50);
});

test('it serializes dollars into cents', function(assert) {
  const transform = this.subject();
  const serialized = transform.serialize(1.50);
  assert.equal(serialized, 150);
});
