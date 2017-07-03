import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('user', { path: '/:id' }, function(){
  //   // this.route('id', { path: '/:id' });
  // })
  this.resource('user', { path: 'user/:name' });
});

export default Router;
