import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  },

  setupController: function(controller, model) {
    var positionNames = ["Business", "Computers", "Construction", "Education", "Engineering", "Farming & Fishing", "Health", "Hospitality", "Law Enforcement", "Management", "Media", "Military", "Office Administration", "Production", "Professional", "Repair & Maintenance", "Sales", "Science", "Transportation"];

    var positionList = [];
    for (let i = 0; i < positionNames.length; i++) {
      positionList.push({id: (i + 1), name: positionNames[i]});
    }
    controller.set('positionList', positionList);

    const currentUser = this.get('session').get('currentUser');
    const user = model.filter(function (el) {
      return el.get('uid') === currentUser.uid;
    });

    controller.set('model', user[0]);
    controller.set('avatar', currentUser.photoURL);
  }
});
