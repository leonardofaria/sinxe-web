import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let user = this.store.query('user', {
      orderBy: 'uid',
      equalTo: this.get('session').get('currentUser').uid
    });

    let events = this.store.query('event', {
      orderBy:'time',
      startAt: Date.now()/1000
    });

    return Ember.RSVP.hash({
      user: user,
      events: events
    });

  },
  actions: {
    selectChoice(itemID) {
      const currentUser = this.get('session').get('currentUser');
      var userslist = this.store.peekAll('user');

      const user = userslist.filter(function (el) {
        return el.get('uid') === currentUser.uid;
      });

      var items = this.store.peekAll('event');
      const itemSelected = items.filter((item) => {
        return item.get('id') === itemID;
      })
      user[0].get('events').addObject(itemSelected[0]);
      user[0].save();
      // itemSelected[0].get('users').addObject(user[0]);
      // itemSelected[0].save();
    }
  }
});
