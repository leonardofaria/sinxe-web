import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('events', {path: '/event/:event_id'});
  this.route('profile');
  this.route('choices');

  this.route('my-choices');
  this.route('create-event');
  this.route('chat', {path : "/chat/:chat_id"});
});

export default Router;
