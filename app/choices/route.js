import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('event');
  },
  actions: {
    selectChoice(itemID) {
      var users = this.store.findAll('user');
      const currentUser = this.get('session').get('currentUser');
      console.log(currentUser.uid);
      const user = users.filter(function (el) {
        return el.get('uid') === currentUser.uid;
      });
      console.log(user);
      console.log(itemID);
    }
  }

});
