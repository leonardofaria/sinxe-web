import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement: function() {
    Ember.$("#text-input").keyup(function (e) {
      if (e.keyCode == 13) {
        Ember.$("#send").click();
      }
    });

    Ember.$('html, body').animate({ scrollTop: Ember.$("#messages li:last-of-type").offset().top }, 450);

    Ember.$('time').each(function() {
      let timestamp = $(this).find('span').data('timestamp');
      let date = $.timeago(new Date(timestamp * 1000));
      Ember.$(this).find('span').text(date);
    });

    var chatHeight = Ember.$('#messages').height();

    var updateMessages = setInterval(function() {
      var messages = Ember.$('#messages');

      if (messages.length > 0) {
        if (chatHeight !== Ember.$('#messages').height()) {
          Ember.$('html, body').animate({ scrollTop: Ember.$("#messages li:last-of-type").offset().top }, 450);
          chatHeight = Ember.$('#messages').height();
        }

        Ember.$('time').each(function() {
          let timestamp = $(this).find('span').data('timestamp');
          let date = $.timeago(new Date(timestamp * 1000));
          Ember.$(this).find('span').text(date);
        });
      } else {
        clearInterval(updateMessages);
      }
    }, 1000);
  }

});
