import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.store.findAll('event');
  },

  model: function(params) {
    console.log(params.event_id);
    return this.store.peekRecord('event', params.event_id);
  },

  actions: {
    joinParty(eventId) {
      console.log("event id", eventId)
      var currentUser = this.get('session').get('currentUser');
      var userslist = this.store.peekAll('user');
      var user = userslist.filter(function (el) {
        return el.get('uid') === currentUser.uid;
      });

      var items = this.store.peekAll('event');
      const itemSelected = items.filter((item) => {
        return item.get('id') === eventId;
      })
      itemSelected[0].get('users').addObject(user[0]);
      itemSelected[0].save();


//       store.findRecord('post', 1).then(function(post) {
//   post.get('title'); // => "Rails is Omakase"
//
//   post.set('title', 'A new post');
//
//   post.save(); // => PUT to '/posts/1'
// });
    }
  }

});
