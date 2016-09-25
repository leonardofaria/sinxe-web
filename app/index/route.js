import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let currentUser = this.get('session').get('currentUser');

    if (currentUser !== undefined) {
      Ember.$('body').removeClass('index');
      this.transitionTo('choices');
    }
  }
});
