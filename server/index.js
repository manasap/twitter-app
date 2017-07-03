/* eslint-env node */

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

const fs = require('fs');
const chance = require('chance').Chance();
module.exports = function(app) {
  const globSync   = require('glob').sync;
  var mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  var proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  // Log proxy requests
  const morgan  = require('morgan');
  app.use(morgan('dev'));

  mocks.forEach(function(route) { route(app); });
  proxies.forEach(function(route) { route(app); });

  var bodyParser = require('body-parser')
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.get('/timelines', function(req, res) {
    const json = JSON.parse(fs.readFileSync('./public/user/timeline.json'));
    res.send(json);
  });

  app.post('/timelines', function(req, res) {
    fs.readFile('./public/user/timeline.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); //now it an object
        req.body.id = chance.guid();// random id generation
        obj.push(req.body); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile('./public/user/timeline.json', json, 'utf8'); // write it back
    }});
    res.send(json);

  });

  app.get('/users/twitterdev', function(req, res) {
    const json = JSON.parse(fs.readFileSync('./public/user/twitterdev.json'));
    res.send(json);
  });

  app.get('/users/twittermktg', function(req, res) {
    const json = JSON.parse(fs.readFileSync('./public/user/twittermktg.json'));
    res.send(json);
  });

};
