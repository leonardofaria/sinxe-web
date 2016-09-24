import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.findAll('user');
    return this.store.findAll('event');
  },

  actions: {
    selectChoice(itemID) {
      const currentUser = this.get('session').get('currentUser');
      var userslist = this.store.peekAll('user');
      console.log(userslist);
      const user = userslist.filter(function (el) {
        return el.get('uid') === currentUser.uid;
      });
      console.log(user[0]);
      var items = this.store.peekAll('event');
      const itemSelected = items.filter((item) => {
        return item.get('id') === itemID;
      })
      console.log(itemSelected[0]);

      user[0].get('events').addObject(itemSelected[0]);
      user[0].save();
    }
  }

});
