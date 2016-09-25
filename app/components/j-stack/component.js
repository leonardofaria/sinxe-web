import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  didInsertElement: function() {
    let self = this;
    let items = this.get('items');

    Ember.$('.wrap').css({
      'height': Ember.$(window).height() - 210 + "px",
      'max-height': '420px'
    });

    items.forEach((item) => {
      console.log(item);
      let membersInfo = item.get('users').get('content').currentState;
      let members = '';

      if (Array.isArray(membersInfo)) {
        membersInfo.forEach((member) => {
          console.log(member._data);
          members += `<img src="${member._data.photoUrl}" class="avatar" />`;
        });
      } else {
        members += `<img src="${member._data.photoUrl}" class="avatar" />`;
      }

      let output = `
        <li data-id="${item.id}" >
          <div class="img" style="background-image: url(${item.data.imageUrl})"></div>

          <div class="event">
            <h2>${item.data.restaurantName}</h2>
            <div class="quantity">
              <span class="fa fa-users"></span> <span>1 / ${(item.data.participants + 1)}</span>
            </div>
          </div>

          <div class="event-details">
            <div class="description">
              <span>Happening at ${moment(item.data.time * 1000).format("H:m")}</span><br/>
              ${item.data.address}
            </div>
          </div>

          <div class="like"></div>
          <div class="dislike"></div>
        </li>`;

      Ember.$(".tinderslide ul").prepend(output);
    });

    Ember.$(".tinderslide").jTinder({
      // dislike callback
      onDislike: function (item) {
      },
      // like callback
      onLike: function (item) {
        //console.log($(item).data('id'));
        self.actions.selectChoice(self, $(item).data('id'));
      },
      animationRevertSpeed: 200,
      animationSpeed: 400,
      threshold: 1,
      likeSelector: '.like',
      dislikeSelector: '.dislike'
    });

    Ember.$('.actions .like, .actions .dislike').click(function(e){
      e.preventDefault();
      Ember.$(".tinderslide").jTinder(Ember.$(this).attr('class'));
    });
  },

  actions: {
    selectChoice(self, itemID) {
      console.log(itemID);

      self.sendAction('selectChoice', itemID);
    }
  }
 });
