import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    $(".time-dropper").timeDropper();
    $(".date-dropper").dateDropper({dropWidth: 150, format:"M j, Y"});
  }
});
