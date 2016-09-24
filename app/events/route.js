import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.store.findAll('event');
  },

  model: function(params) {
    console.log(params.event_id);
    return this.store.peekRecord('event', params.event_id);
  }

});
