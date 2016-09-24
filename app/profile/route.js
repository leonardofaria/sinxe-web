import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function(controller) {
    var positionNames = ["Banker", "Developer"];
    var positionList = [];
    for (let i = 0; i < positionNames.length; i++) {
      positionList.push({id: (i + 1), name: positionNames[i]});
    }
    controller.set('positions', positionList);
  }
});
