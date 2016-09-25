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
      let timestamp = $(this).find('span').text();
      // let date ()

      console.log(timestamp);
      let date = $.timeago(new Date(timestamp * 1000));
      Ember.$(this).find('span').text(date);
      console.log(date);
    });
  }

});
