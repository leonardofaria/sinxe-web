import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    $( "#time" ).timeDropper();
    $( "#date" ).dateDropper();
  }
});
