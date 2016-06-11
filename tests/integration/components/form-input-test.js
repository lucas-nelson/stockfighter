import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { make, manualSetup } from 'ember-data-factory-guy';

moduleForComponent('form-input', 'Integration | Component | form input', {
  integration: true,

  // make factory-guy work in an integration test
  beforeEach: function () {
    manualSetup(this.container);
  }
});

test('it renders', function(assert) {
  assert.expect(9);

  this.set('model', make('order', { account: 'test-account' }));

  this.render(hbs`
    {{form-input model=model name='account' type='text'}}
  `);

  const $component = this.$('div.form-group');
  assert.ok($component.length, 'there is a div.form-group');

  const $label = $component.children('label');
  assert.ok($label.length, 'there is a child label');
  assert.equal($label.attr('for'), 'input-account');
  assert.equal($label.text().trim(), 'account');

  const $input = $component.children('input.form-control');
  assert.ok($input.length, 'there is a child input.form-control');
  assert.ok($input.is('#input-account'), 'id attribute correctly set');
  assert.equal($input.attr('type'), 'text');
  assert.equal($input.val(), 'test-account');

  const $errors = $component.children('.help-block');
  assert.notOk($errors.length, 'there are no errors');
});

test('it renders showing errors', function(assert) {
  assert.expect(4);

  this.set('model', { errors: { account: [{ message: 'is not a number' }, { message: "can't be blank" }] } });

  this.render(hbs`
    {{form-input model=model name='account' type='text'}}
  `);

  const $component = this.$('div.form-group');
  assert.ok($component.is('.has-error'), 'the form-group has the .has-error class');

  const $errors = $component.children('.help-block');
  assert.equal($errors.length, 2);
  assert.equal($errors.eq(0).text().trim(), 'is not a number');
  assert.equal($errors.eq(1).text().trim(), "can't be blank");
});
