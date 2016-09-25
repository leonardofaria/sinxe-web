import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.query('user', {
      orderBy: 'uid',
      equalTo: this.get('session').get('currentUser').uid
    });
  },

  setupController: function(controller, model) {
    var categories = ["Afghan", "African", "American (New)", "American (Traditional)", "Arabian", "Argentine", "Armenian", "Asian Fusion", "Australian", "Austrian", "Bangladeshi", "Barbeque", "Basque", "Belgian", "Brasseries", "Brazilian", "Breakfast & Brunch", "British", "Buffets", "Burgers", "Burmese", "Cafes", "Cafeteria", "Cajun/Creole", "Calabrian", "Cambodian", "Cantonese", "Caribbean", "Catalan", "Cheesesteaks", "Chicken Shop", "Chicken Wings", "Chinese", "Colombian", "Comfort Food", "Creperies", "Cuban", "Czech", "Delis", "Dim Sum", "Diners", "Dinner Theater", "Dominican", "Egyptian", "Ethiopian", "Falafel", "Fast Food", "Filipino", "Fish & Chips", "Fondue", "Food Court", "Food Stands", "French", "Gastropubs", "German", "Gluten-Free", "Greek", "Hainan", "Haitian", "Halal", "Hawaiian", "Himalayan/Nepalese", "Hong Kong Style Cafe", "Hot Dogs", "Hot Pot", "Hungarian", "Iberian", "Indian", "Indonesian", "Irish", "Italian", "Izakaya", "Japanese", "Korean", "Kosher", "Laotian", "Latin American", "Lebanese", "Live/Raw Food", "Malaysian", "Mediterranean", "Mexican", "Middle Eastern", "Modern European", "Mongolian", "Moroccan", "New Mexican Cuisine", "Nicaraguan", "Noodles", "Pakistani", "Persian/Iranian", "Peruvian", "Pizza", "Polish", "Pop-Up Restaurants", "Portuguese", "Poutineries", "Puerto Rican", "Ramen", "Russian", "Salad", "Salvadoran", "Sandwiches", "Sardinian", "Scandinavian", "Scottish", "Seafood", "Senegalese", "Shanghainese", "Singaporean", "Slovakian", "Soul Food", "Soup", "South African", "Southern", "Spanish", "Sri Lankan", "Steakhouses", "Supper Clubs", "Sushi Bars", "Syrian", "Szechuan", "Taiwanese", "Tapas Bars", "Tapas/Small Plates", "Teppanyaki", "Tex-Mex (te", "Thai", "Themed Cafes", "Trinidadian", "Turkish", "Tuscan", "Ukrainian", "Uzbek", "Vegan", "Vegetarian", "Venezuelan", "Vietnamese", "Waffles"];

    controller.set('categories', categories);
  },

  actions: {
    publishEvent: function() {
      if($(".pac-input").val() === "") {
        alert("Please select restaurant");
      } else if($(".date-dropper").val() === "" || $(".time-dropper").val() === "") {
        alert("Please select date");
      } else if(Date.parse($(".date-dropper").val() + " " + $(".time-dropper").val() + " " + "PST") < Date.now()) {
        alert("Please select a date that is in the future");
      } else {

        var userslist = this.store.peekAll('user');
        const user = userslist.filter(function (el) {
          return true;
        });

        var newChat = this.store.createRecord('chat');
        newChat.save();

        var newEvent = this.store.createRecord('event', {
          restaurantName: $(".pac-input").val(),
          address: $(".address-input").val(),
          time: Date.parse($(".date-dropper").val() + " " + $(".time-dropper").val() + " " + "GMT")/1000,
          participants: $(".participants-input").val(),
          website: $(".website-input").val(),
          imageUrl: $('.image-input').prop('src'),
          placeId: $('#place-id').val(),
          category: $(".category-input").val(),
          chat: newChat
        });
        newEvent.get('users').addObject(user[0]);
        newEvent.save().then(function() {
          user[0].get('events').addObject(newEvent);
          user[0].save();
        }).then(this.transitionTo('choices'));
      }
    }
  }
});
