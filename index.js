'use strict';

var PLUGIN_NAME = 'kalabox-plugin-php';

module.exports = function(kbox) {

  var events = kbox.core.events;

  kbox.whenApp(function(app) {

    // Events
    // EVENT: pre-engine-create
    events.on('pre-engine-create', function(createOptions, done) {
      var type;
      if (createOptions.name) {
        var split = createOptions.name.split('_');
        type = (split[2]) ? split[2] : split[1];
      }

      var phpVersion;
      if (app.config.pluginConf[PLUGIN_NAME]) {
        if (app.config.pluginConf[PLUGIN_NAME]['php-version']) {
          phpVersion = app.config.pluginConf[PLUGIN_NAME]['php-version'];
        }
      }
      var envs = [];
      if (phpVersion) {
        if (type !== 'db') {
          envs.push('PHP_VERSION=' + phpVersion);
        }
      }

      if (createOptions.Env) {
        envs.forEach(function(env) {
          createOptions.Env.push(env);
        });
      }
      else {
        createOptions.Env = envs;
      }

      done();
    });

  });

};
