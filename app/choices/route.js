import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let user = this.store.query('user', {
      orderBy: 'uid',
      equalTo: this.get('session').get('currentUser').uid
    });

    let events = this.store.query('event', {
      orderBy:'time',
      startAt: Date.now()/1000
    });

    return Ember.RSVP.hash({
      user: user,
      events: events
    });

  },
  setupController: function(controller, model) {
    var categories = ["Afghan", "African", "American (New)", "American (Traditional)", "Arabian", "Argentine", "Armenian", "Asian Fusion", "Australian", "Austrian", "Bangladeshi", "Barbeque", "Basque", "Belgian", "Brasseries", "Brazilian", "Breakfast & Brunch", "British", "Buffets", "Burgers", "Burmese", "Cafes", "Cafeteria", "Cajun/Creole", "Calabrian", "Cambodian", "Cantonese", "Caribbean", "Catalan", "Cheesesteaks", "Chicken Shop", "Chicken Wings", "Chinese", "Colombian", "Comfort Food", "Creperies", "Cuban", "Czech", "Delis", "Dim Sum", "Diners", "Dinner Theater", "Dominican", "Egyptian", "Ethiopian", "Falafel", "Fast Food", "Filipino", "Fish & Chips", "Fondue", "Food Court", "Food Stands", "French", "Gastropubs", "German", "Gluten-Free", "Greek", "Hainan", "Haitian", "Halal", "Hawaiian", "Himalayan/Nepalese", "Hong Kong Style Cafe", "Hot Dogs", "Hot Pot", "Hungarian", "Iberian", "Indian", "Indonesian", "Irish", "Italian", "Izakaya", "Japanese", "Korean", "Kosher", "Laotian", "Latin American", "Lebanese", "Live/Raw Food", "Malaysian", "Mediterranean", "Mexican", "Middle Eastern", "Modern European", "Mongolian", "Moroccan", "New Mexican Cuisine", "Nicaraguan", "Noodles", "Pakistani", "Persian/Iranian", "Peruvian", "Pizza", "Polish", "Pop-Up Restaurants", "Portuguese", "Poutineries", "Puerto Rican", "Ramen", "Russian", "Salad", "Salvadoran", "Sandwiches", "Sardinian", "Scandinavian", "Scottish", "Seafood", "Senegalese", "Shanghainese", "Singaporean", "Slovakian", "Soul Food", "Soup", "South African", "Southern", "Spanish", "Sri Lankan", "Steakhouses", "Supper Clubs", "Sushi Bars", "Syrian", "Szechuan", "Taiwanese", "Tapas Bars", "Tapas/Small Plates", "Teppanyaki", "Tex-Mex (te", "Thai", "Themed Cafes", "Trinidadian", "Turkish", "Tuscan", "Ukrainian", "Uzbek", "Vegan", "Vegetarian", "Venezuelan", "Vietnamese", "Waffles"];

    controller.set('categories', categories);
    controller.set('model', model);
  },
  actions: {
    selectChoice(itemID) {
      const currentUser = this.get('session').get('currentUser');
      var userslist = this.store.peekAll('user');

      const user = userslist.filter(function (el) {
        return el.get('uid') === currentUser.uid;
      });

      var items = this.store.peekAll('event');
      const itemSelected = items.filter((item) => {
        return item.get('id') === itemID;
      })
      user[0].get('events').addObject(itemSelected[0]);
      user[0].save();
      // itemSelected[0].get('users').addObject(user[0]);
      // itemSelected[0].save();
    }
  }
});
