'use strict';

var _ = require('lodash');

module.exports = function(kbox, drupal, appName) {

  var taskOpts = {
    name: 'php-version',
    kind: 'string',
    description: 'Your php version.'
  }

  var phpVersions = _.pluck(drupal, 'php');

  // Add an option
  kbox.create.add(appName, {
    option: {
      name: 'php-version',
      task: taskOpts,
      inquire: {
        type: 'list',
        message: 'Php version?',
        default: function(answers) {
          if (answers['drupal-version']) {
            return drupal[answers['drupal-version']].php;
          }
          else {
            // @todo: figure out how to make this less brittle
            return '5.4.40';
          }
        },
        choices: phpVersions
      },
      conf: {
        type: 'plugin',
        plugin: 'kalabox-plugin-php',
        key: 'php-version'
      }
    }
  });

};
