import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return [
      ['Pizza', 'Description here? <br/>Maybe address?', 'http://loremflickr.com/256/256/pizza', 'https://randomuser.me/api/portraits/men/70.jpg', 4],
      ['Sushi', 'Desc?', 'http://loremflickr.com/256/256/sushi', 'https://randomuser.me/api/portraits/men/80.jpg', 2],
      ['Japadog', 'Desc?', 'http://loremflickr.com/256/256/hotdog', 'https://randomuser.me/api/portraits/women/70.jpg', 1]
    ];
  },

});
