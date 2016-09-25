import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.store.findAll('user');
  },

  model: function(params) {
    return this.store.peekRecord('user', params.user_id);
  },

  setupController: function(controller, model) {
    var positionNames = ["Business", "Computers", "Construction", "Education", "Engineering", "Farming & Fishing", "Health", "Hospitality", "Law Enforcement", "Management", "Media", "Military", "Office Administration", "Production", "Professional", "Repair & Maintenance", "Sales", "Science", "Transportation"];

    var positionList = [];
    for (let i = 0; i < positionNames.length; i++) {
      positionList.push({id: (i + 1), name: positionNames[i]});
    }
    controller.set('positionList', positionList);

    controller.set('model', model);
  }
});
