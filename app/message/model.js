import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr('string'),
  photoURL: DS.attr('string'),
  message: DS.attr('string'),
  timestamp: DS.attr('number'),
  chat: belongsTo('chat')
});
