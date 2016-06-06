import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-link-to', 'Integration | Component | nav link to', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{nav-link-to 'orders'}}`);
  assert.equal(this.$('li').length, 1);
  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#nav-link-to 'orders'}}
      template block text
    {{/nav-link-to}}
  `);

  assert.equal(this.$('li').length, 1);
  assert.equal(this.$('li a').text().trim(), 'template block text');
});
