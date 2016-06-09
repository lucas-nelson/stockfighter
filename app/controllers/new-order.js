import Ember from 'ember';
import Logger from 'ember';

export default Ember.Controller.extend({
  account: '',

  isDisabled: Ember.computed.not('isValid'),
  isValid: Ember.computed.notEmpty('account'),

  actions: {
    createOrder() {
      Logger.debug(`creating a new order for account ${this.get('account')}.`);

      this.set('responseMessage', `Your order has been submitted.`);
      this.set('account', '');
    }
  }
});
