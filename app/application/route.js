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

        let facebookId = data.currentUser.providerData[0].uid;
        let photoURL = `http://graph.facebook.com/${facebookId}/picture?type=square&width=500&height=500`

        const user = users.filter(function (el) {
          return el.get('uid') === data.currentUser.uid;
        });

        if (user.length === 0) {

          const newUser = self.store.createRecord('user', {
            name: data.currentUser.displayName,
            email: data.currentUser.email,
            photoUrl: photoURL,
            uid: data.currentUser.uid,
            id: data.currentUser.id,
            facebookId: facebookId
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
      this.transitionTo('index');
    }
  }
});
