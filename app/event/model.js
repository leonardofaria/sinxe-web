import DS from 'ember-data';

export default DS.Model.extend({
  restaurantName: DS.attr('string'),
  address: DS.attr('string'),
  time: DS.attr('number'),
  website: DS.attr('string'),
  imageUrl: DS.attr('string'),
  category: DS.attr('string'),
  placeId: DS.attr('string'),
  users: DS.hasMany('user', {async: true}),
  chat: DS.belongsTo('chat')
});
