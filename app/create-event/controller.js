import Ember from 'ember';

export default Ember.Controller.extend({
  //sortProperties: ['timestamp'],
  //sortAscending: false, // sorts post by timestamp
  actions: {
    done: function() {

    },

    placeChanged: function(place) {
      let address = ``;

      console.dir(place);
      /*

      for (let address_component in place['address_components']) {
        for (let i = 0; i < address_component.lenght; i++) {

          console.log(address_component[i].short_name);
          let parts = address_component[i].parts;

          let addAddressComponent = true;
          for (let part in parts) {
            console.log(part);

            if (part === "administrative_area_level_1" ||
                part === "political") {
              addAddressComponent = false;
            }
          }

          if (addAddressComponent) {
            address += address_component + ' ';
          }

        }
      }
      */

      Ember.$(".image-input").attr("src", place.photos["0"].getUrl({"maxWidth": 350, "maxHeight": 150}));
      setInterval(function() {
        Ember.$(".preview").addClass('visible');
      }, 1000);
      Ember.$(".pac-input").val(place["name"]);
      Ember.$(".address-input").val(place['formatted_address']);
      Ember.$(".website-input").val(place['url']);
      Ember.$("#place-id").val(place.place_id);
      Ember.$("#map").css("width", Ember.$("window").width() + "px");

      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -33.8688, lng: 151.2195},
        zoom: 13
      });
      var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
      });
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
      }
      map.setZoom(17);  // Why 17? Because it looks good.
      marker.setIcon(/** @type {google.maps.Icon} */({
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(35, 35)
      }));
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
      place.makeThis['break'];
     }
   }
 });
