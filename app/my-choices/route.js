import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  },

  setupController: function(controller, model) {

    const currentUser = this.get('session').get('currentUser');
    const user = model.filter(function (el) {
      return el.get('uid') === currentUser.uid;
    });

    controller.set('chosenEvents', user[0].get('events'));
  }
});
