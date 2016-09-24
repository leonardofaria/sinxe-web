import Ember from 'ember';

export default Ember.Controller.extend({
  //sortProperties: ['timestamp'],
  //sortAscending: false, // sorts post by timestamp
actions:{
    done: function() {

    },

    placeChanged: function(place) {
      $(".image-input").attr("src", place.photos["0"].getUrl({"maxWidth":350, "maxHeight":150}));
      $(".pac-input").val(place["name"]);
      $(".address-input").val(place['formatted_address']);
      $(".website-input").val(place['url']);
      $("#place-id").val(place.place_id);
      // $(".date-dropper");
      // $(".time-dropper");
      // $(".category-input").val();

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
         map.setZoom(17);  // Why 17? Because it looks good.
      }
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
