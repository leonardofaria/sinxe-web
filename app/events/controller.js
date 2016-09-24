import Ember from 'ember';

export default Ember.Controller.extend({
  //sortProperties: ['timestamp'],
  //sortAscending: false, // sorts post by timestamp
  actions: {
    publishEvent: function() {
      var newEvent = this.store.createRecord('event', {
        restaurantName: this.get('restaurantName'),
        address: this.get('address'),
        time: this.get('time'),
        imageUrl: "testing for now will be filled with out generated value",
        category: this.get('category')
      });
      newEvent.save();
    }
  }
});
