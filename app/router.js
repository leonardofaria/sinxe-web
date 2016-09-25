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
  this.route('chats', {path : "/chats/:chat_id"});

  this.route('biography', {path : "/users/:user_id"});
});

export default Router;
