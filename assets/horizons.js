'use strict';



;define("horizons/app", ["exports", "horizons/resolver", "ember-load-initializers", "horizons/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("horizons/components/contact-form", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("horizons/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("horizons/helpers/app-version", ["exports", "horizons/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("horizons/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("horizons/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("horizons/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "horizons/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("horizons/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("horizons/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("horizons/initializers/export-application-global", ["exports", "horizons/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("horizons/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("horizons/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("horizons/router", ["exports", "horizons/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('contact');
    this.route('terms');
    this.route('privacy');
    this.route('about');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("horizons/routes/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("horizons/routes/contact", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("horizons/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("horizons/routes/privacy", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("horizons/routes/terms", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("horizons/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("horizons/templates/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "TchByS4t",
    "block": "{\"symbols\":[],\"statements\":[[0,\" \"],[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "horizons/templates/about.hbs"
    }
  });

  _exports.default = _default;
});
;define("horizons/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "W7HyKFrb",
    "block": "{\"symbols\":[],\"statements\":[[7,\"nav\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"left\"],[9],[0,\"\\n        \"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[7,\"img\"],[11,\"class\",\"logo\"],[11,\"src\",\"/assets/images/logo_white_large.png\"],[9],[10]],\"parameters\":[]},null],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"\\n            \"],[7,\"button\"],[11,\"class\",\"dark solid orange\"],[11,\"id\",\"try-now\"],[11,\"type\",\"button\"],[9],[0,\"Try Now\"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"content\"],[9],[0,\"\\n    \"],[1,[21,\"outlet\"],false],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"footer\"],[11,\"class\",\"bg-orange dark\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"footer-left\"],[9],[0,\"\\n        \"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[7,\"img\"],[11,\"class\",\"logo\"],[11,\"src\",\"/assets/images/logo_white_large.png\"],[9],[10]],\"parameters\":[]},null],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"footer-right\"],[9],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[4,\"link-to\",[\"about\"],null,{\"statements\":[[0,\"About\"]],\"parameters\":[]},null],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "horizons/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("horizons/templates/components/contact-form", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5Bh2cczR",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1]],\"hasEval\":false}",
    "meta": {
      "moduleName": "horizons/templates/components/contact-form.hbs"
    }
  });

  _exports.default = _default;
});
;define("horizons/templates/contact", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "qEfWv18q",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "horizons/templates/contact.hbs"
    }
  });

  _exports.default = _default;
});
;define("horizons/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "TO74Tt8Q",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[11,\"id\",\"hero\"],[11,\"class\",\"dark\"],[9],[0,\"\\n    \"],[7,\"div\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"wrapper\"],[9],[0,\"\\n            \"],[7,\"h1\"],[9],[0,\"Expand your horizons.\"],[10],[0,\"\\n            \"],[7,\"p\"],[9],[0,\"\\n                Stop settling for the same horizon day after day. Get out and explore the unknown. View sights unseen and\\n                travel to places unvisited.\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"section\"],[11,\"class\",\"bg-orange dark\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"preview-wrapper\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"phone\"],[9],[0,\"\\n\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"download-links\"],[9],[0,\"\\n            \"],[7,\"span\"],[11,\"id\",\"app-store\"],[9],[10],[0,\"\\n            \"],[7,\"span\"],[11,\"id\",\"play-store\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"h1\"],[9],[0,\"\\n        Find out more\\n    \"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"\\n        If you'd like to get in touch, fill out the form bellow and we'll get back to you ASAP.\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"form-wrapper\"],[9],[0,\"\\n        \"],[7,\"form\"],[11,\"id\",\"enquire-form\"],[9],[0,\"\\n            \"],[7,\"input\"],[11,\"name\",\"full-name\"],[11,\"placeholder\",\"Full Name\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n            \"],[7,\"input\"],[11,\"name\",\"email-address\"],[11,\"placeholder\",\"Email Address\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n            \"],[7,\"textarea\"],[11,\"name\",\"\"],[11,\"id\",\"\"],[11,\"cols\",\"25\"],[11,\"rows\",\"10\"],[11,\"placeholder\",\"Message\"],[9],[10],[0,\"\\n            \"],[7,\"button\"],[11,\"class\",\"light white solid\"],[11,\"type\",\"submit\"],[9],[0,\"Submit\"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"section\"],[11,\"id\",\"quote\"],[9],[0,\"\\n    \"],[7,\"h1\"],[9],[0,\"\\n        The horizon changes, but the sun does not.\\n    \"],[10],[0,\"\\n    \"],[7,\"small\"],[9],[0,\"Joyce Rachelle\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "horizons/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("horizons/templates/privacy", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "mPxV28cs",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "horizons/templates/privacy.hbs"
    }
  });

  _exports.default = _default;
});
;define("horizons/templates/terms", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "1brzr8G4",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "horizons/templates/terms.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('horizons/config/environment', [], function() {
  var prefix = 'horizons';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("horizons/app")["default"].create({"name":"horizons","version":"0.0.0+c559271b"});
          }
        
//# sourceMappingURL=horizons.map
