import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },

  actions: {
    signIn: function(provider) {
      const users = this.store.findAll('user');
      const self = this;

      this.get('session').open('firebase', { provider: provider}).then(function(data) {
        // console.dir(data);
        // console.log(data.currentUser);

        // console.log("Sign-in provider: "+data.providerId);
        // console.log("Provider-specific UID: "+data.currentUser.uid);
        // console.log("Name: "+data.currentUser.displayName);
        // console.log("Email: "+data.currentUser.email);
        // console.log("Photo URL: "+data.currentUser.photoURL);

        const user = users.filter(function (el) {
          return el.get('email') === data.currentUser.email;
        });

        if (user.length === 0) {

          const newUser = self.store.createRecord('user', {
            name: data.currentUser.displayName,
            email: data.currentUser.email,
            photoUrl: data.currentUser.photoURL,
            uid: data.currentUser.uid,
            id: data.currentUser.id
          });
          newUser.save();

          self.transitionTo('profile');

        } else {

          self.transitionTo('choices');

        }

      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});