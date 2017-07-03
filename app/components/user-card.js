import Ember from 'ember';

export default Ember.Component.extend({
  text: Ember.computed.alias("timeline.text"),
  actions:{
    saveTweet: function () {
      var timeline = this.get('timeline');
      var user = this.get('user');
      var date = new Date();
      var tweet = {
        text: timeline.text,
        created_at: date,
        user: user
      };
      this.store.createRecord('timeline', tweet).save();
    }
  }
});
