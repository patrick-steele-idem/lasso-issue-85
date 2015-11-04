require('babel/register');

require('./src/server');

require('lasso').configure({
    "plugins": [
        {
          "plugin": "lasso-require",
          "config": {
            "babel": {
              "blacklist": "strict",
              "loose": "all"
            }
          }
        }
    ],
    "bundles": [
        {
          "name": "proto1",
          "dependencies": [
            "require: ./src/layouts/proto1/index.es6"
          ]
        },
        {
          "name": "proto2",
          "dependencies": [
            "require: ./src/layouts/proto2/index.es6"
          ]
        }
    ],
    bundlingEnabled: true
});