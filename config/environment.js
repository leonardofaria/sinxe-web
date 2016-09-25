/* jshint node: true */

module.exports = function(environment) {

  var ENV = {
    modulePrefix: 'sinxe',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    firebase: {
      apiKey: 'AIzaSyBykxURuWy43EO7p7AJDTNQqNl-WtJhqic',
      authDomain: 'sinxe-d61e7.firebaseapp.com',
      databaseURL: 'https://sinxe-d61e7.firebaseio.com',
      storageBucket: 'sinxe-d61e7.appspot.com',
    },

    torii: {
      sessionServiceName: 'session'
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV['place-autocomplete'] = {
    exclude: false,
    key: 'AIzaSyCDWBDLshPKt8wVUEBF-ocaAj5LwPEVnRc'
  };

  ENV.serviceWorker = {
    enabled: true,
    debug: true,
    serviceWorkerFile: "serviceworker.js",
    includeRegistration: false,
    fallback: [
     '/offline'
   ]
  };

  return ENV;
};
