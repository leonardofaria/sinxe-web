import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.findAll('user');
    return this.store.findAll('event');
  },
  actions: {
    selectChoice(itemID) {
      const currentUserId = this.get('session').get('currentUser').uid;
      console.log(currentUserId);
      console.log(itemID);
      var user = this.store.query('user', {
        equalTo: currentUserId
      });
      var itemSelected = this.store.query('event', {
        equalTo: itemID
      });
      console.log(itemSelected);
      console.log(user);
      user.get('events').addObject()
    }
  }

});
