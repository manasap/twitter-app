import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  created_at: attr('date'),
  text: attr('string'),
  user: DS.belongsTo('user'),
  retweet_count: attr('string'),
  favorite_count: attr('string'),
  lang: attr('string')
});
