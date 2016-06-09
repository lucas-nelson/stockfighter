import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('order', { direction: 'buy' });
  },

  actions: {
    createOrder(newOrder) {
      newOrder.save().then((response) => {
        this.set('responseMessage', `Your order has been submitted. Order id: ${response.get('id')}.`);
      }).catch((reason) => {
        Ember.Logger.debug(`failed to save: ${reason}`);
      });
    }
  }
});
