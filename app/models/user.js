import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  created_at: attr('date'),
  name: attr('string'),
  screen_name: attr('string'),
  profile_image_url: attr('string'),
  lang: attr('string'),
  favorites_count: attr('string'),
  followers_count: attr('string'),
  friends_count: attr('string'),
  status: attr('string'),
  statuses_count: attr('string'),
  url: attr('string')
});
