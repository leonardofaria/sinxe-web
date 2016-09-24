import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateUser: function() {
      this.get('model').save();
      this.transitionToRoute('choices');
    }
  }
});
