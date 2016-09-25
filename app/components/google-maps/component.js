import Ember from 'ember';
import config from 'sinxe/config/environment';

export default Ember.Component.extend({
  classNames: ['google-maps'],

  didInsertElement: function() {
    let placeId = this.get('placeId');

    // let url = `https://jsonp.afeld.me/?url=https://maps.googleapis.com/maps/api/place/details/json?key=${config['place-autocomplete']['key']}&placeid=${placeId}`;

    let url = `https://sinxeproxy.herokuapp.com/?url=https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fplace%2Fdetails%2Fjson%3Fkey%3D${config['place-autocomplete']['key']}%26placeid%3D${placeId}`;

    console.log(url);

    Ember.$('.mask').on('click', function() {
      Ember.$(this).parent().toggleClass('big');
      Ember.$(this).toggleClass('small');
      Ember.$('#map').toggleClass('big');
    });

    setTimeout(function() {
      Ember.$('.avatar').each(function() {
        console.log(parseInt(Ember.$(this).innerWidth()) + ' ' + Ember.$(this).css('height'));
        Ember.$(this).css('height', parseInt(Ember.$(this).innerWidth()) + 'px !important');
        // this.style.height = parseInt(Ember.$(this).innerWidth()) + 'px';
        console.log(Ember.$(this).css('height'));
      });
    }, 500);

    Ember.$.ajax({
      method: 'get',
      url: url,
      dataType: 'json'
    }).done(function(data){

      let place = data.result;

      console.dir(place);
      var map = new google.maps.Map(document.getElementById('map'), {
        center: place.geometry.location,
        zoom: 17
      });

      var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
      });

      marker.setIcon(/** @type {google.maps.Icon} */({
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(35, 35)
      }));
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

    }).fail( function(xhr, textStatus, errorThrown) {
      console.log(xhr.responseText);
      console.log(textStatus);
      console.log(errorThrown);
    });
  }
});
