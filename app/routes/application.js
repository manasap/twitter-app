import Ember from 'ember';
 export default Ember.Route.extend({
   model(params, transition){
     return Ember.RSVP.hash({
      user: this.store.findRecord('user', transition.params["user"].name),
      timeline: this.store.findAll('timeline')
    });
  },
  setupController(controller, model) {
    controller.set('user', model.user);
    controller.set('timeline', model.timeline);
  },
  serialize: function(model) {
      return { ['name']: model.user.name };
  }

 })
