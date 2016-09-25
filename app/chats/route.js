import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    Window.chat_id = params.chat_id;
    let chat = this.store.query('chat', {
      equalTo: params.chat_id
    });

    let message = this.store.findAll('message');

    return Ember.RSVP.hash({
      chat: chat,
      message: message
    });

  },

  setupController(controller, model) {
    let chatMessage = model.chat.filter((data) => {

      return true;
    })[0].get('messages');

    controller.set('chatMessage', chatMessage);

  },

  actions: {
    sendMessage() {
      let message = $('#text-input');
      let name = this.get('session').get('currentUser').displayName;
      let photoUrl = this.get('session').get('currentUser').photoURL;
      var chatslist = this.store.peekAll('chat');

      var chat = chatslist.filter(function (el) {
        return el.id === Window.chat_id;
      });

      var newMessage = this.store.createRecord('message', {
        name: name,
        photoURL: photoUrl,
        message: message.val(),
        timestamp: Date.now(),
        chat: chat[0]
      });

      newMessage.save();
      message.val("");


      chat[0].get('messages').addObject(newMessage);
      chat[0].save();
    }
  }
});
