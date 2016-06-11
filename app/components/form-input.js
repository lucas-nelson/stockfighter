import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form-group'],
  classNameBindings: ['hasError'],

  // add a 'has-error' class to the component if there are errors
  hasError: Ember.computed.notEmpty('errors'),

  // dynamically get to the right model attribute (and errors list) for this
  // component for the given 'name' component attribute
  //
  // inspiration:
  // https://spin.atomicobject.com/2015/08/03/ember-computed-properties/
  modelAttribute: function() {
    return Ember.Object.extend({
      errors: Ember.computed.alias(`model.errors.${this.get('name')}`),
      value: Ember.computed.alias(`model.${this.get('name')}`)
    }).create({model: this.get('model')});
  }.property('model', 'name'),
  errors: Ember.computed.alias('modelAttribute.errors'),
  value: Ember.computed.alias('modelAttribute.value')
});
