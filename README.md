# Kalabox Plugin PHP

For now a simple PHP plugin that lets you set the PHP_VERSION env in all your containers so you can make use of things
like phpbrew.

## Installation

You can install this plugin by going into your app directory and running the normal

```
npm install kalabox-plugin-php --save
```

In order for your app to use the plugin you will also need to inform the app of its existence. This can be done in the `kalabox.json` file in your app root. Just add the plugin name to the `appPlugins` key.

```json
{
  "appName": "my-app",
  "appPlugins": [
    "my-hot-plugin",
    "kalabox-plugin-php",
  ]
}
```

## Configuration

In your apps kalabox.json add the following to the pluginConf key to set the version you want injected. **Please note that
your container must know how to handle this!!!**

```json
  "kalabox-plugin-php": {
    "conf": {
      "php-version": "5.4.40"
    }
  }
```

**It is important to note that if you change this in your config you will need to perform a `kbox rebuild` to see the changes reflected**

## Other Resources

* [API docs](http://api.kalabox.me/)
* [Test coverage reports](http://coverage.kalabox.me/)
* [Kalabox CI dash](http://ci.kalabox.me/)
* [Mountain climbing advice](https://www.youtube.com/watch?v=tkBVDh7my9Q)
* [Boot2Docker](https://github.com/boot2docker/boot2docker)
* [Syncthing](https://github.com/syncthing/syncthing)
* [Docker](https://github.com/docker/docker)

-------------------------------------------------------------------------------------
(C) 2015 Kalamuna and friends


