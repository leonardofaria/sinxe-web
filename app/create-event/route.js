import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.query('user', {
      orderBy: 'uid',
      equalTo: this.get('session').get('currentUser').uid
    });
  },

  actions: {
    publishEvent: function() {
      if($(".pac-input") == "") {
        alert("Please select restaurant");
      } else if($(".date-dropper").val() == "" || $(".time-dropper").val() == "") {
        alert("Please select date");
      } else if(Date.parse($(".date-dropper").val() + " " + $(".time-dropper").val() + " " + "GMT")/1000 < Date.now()/1000) {
        alert("Please select a date that is in the future");
      } else {
        var userslist = this.store.peekAll('user');
        const user = userslist.filter(function (el) {
          return true;
        });

        var newEvent = this.store.createRecord('event', {
          restaurantName: $(".pac-input").val(),
          address: $(".address-input").val(),
          time: Date.parse($(".date-dropper").val() + " " + $(".time-dropper").val() + " " + "GMT")/1000,
          website: $(".website-input").val(),
          imageUrl: $('.image-input').prop('src'),
          placeId: $('#place-id').val(),
          category: $(".category-input").val(),
          user: user[0]
        });
        newEvent.save().then(function() {
          user[0].get('events').addObject(newEvent);
          user[0].save();
        });
      }
    }
  }
});
