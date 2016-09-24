import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.query('chat', {
      limitToLast: 20
    });
  },
  actions: {
    sendMessage() {
      let message = $('#text-input').val();
      let name = this.get('session').get('currentUser').displayName;

      var chatMessage = this.store.createRecord('chat', {
        name: name,
        message: message,
        timestamp: Date.now()
      });
      chatMessage.save();
      message.val("");
    }
  }
});
