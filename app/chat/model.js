import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  messages: DS.hasMany('message', {async: true}),
  event: DS.belongsTo('event')
});
