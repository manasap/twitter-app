# twitter-app

It is a UI application in ember which displays timeline of atlas two different users - twittedev and twittermktg. Clicking on the name of any tweet should navigate to the corresponding user timeline and Url for accessing the timeline per user is - /user/twitterdev and /user/twittermktg. Data is read from static JSON files and the api calls are mocked using express.js to modify the content of JSON files.
[Link to Screen Recording](https://github.com/manasap/twitter-app/blob/master/twitter-app-screen-recording.mov)
[Link to Screenshot](https://github.com/manasap/twitter-app/blob/master/twitter-app.png)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd twitter-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
