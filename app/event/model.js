import DS from 'ember-data';

export default DS.Model.extend({
  restaurantName: DS.attr('string'),
  address: DS.attr('string'),
  time: DS.attr('date'),
  imageUrl: DS.attr('string'),
  category: DS.attr('string'),
  users: DS.hasMany('user', {async: true})
});
