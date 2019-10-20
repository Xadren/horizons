'use strict';

define("horizons/tests/integration/components/contact-form-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | contact-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "DF58DD/N",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"contact-form\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "gbY7RKoF",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"contact-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("horizons/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/contact-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/contact-form.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/about.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass ESLint\n\n');
  });
  QUnit.test('routes/contact.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/privacy.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/privacy.js should pass ESLint\n\n');
  });
  QUnit.test('routes/terms.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/terms.js should pass ESLint\n\n');
  });
});
define("horizons/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('horizons/templates/about.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'horizons/templates/about.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('horizons/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'horizons/templates/application.hbs should pass TemplateLint.\n\nhorizons/templates/application.hbs\n  2:4  error  Incorrect indentation for `<span>` beginning at L2:C4. Expected `<span>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `{{#link-to}}` beginning at L3:C8. Expected `{{#link-to}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  4:8  error  Incorrect indentation for `<span>` beginning at L4:C8. Expected `<span>` to be at an indentation of 6 but was found at 8.  block-indentation\n  5:12  error  Incorrect indentation for `<button>` beginning at L5:C12. Expected `<button>` to be at an indentation of 10 but was found at 12.  block-indentation\n  10:4  error  Incorrect indentation for `{{outlet}}` beginning at L10:C4. Expected `{{outlet}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  13:4  error  Incorrect indentation for `<div>` beginning at L13:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  16:4  error  Incorrect indentation for `<div>` beginning at L16:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  14:8  error  Incorrect indentation for `{{#link-to}}` beginning at L14:C8. Expected `{{#link-to}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  17:8  error  Incorrect indentation for `<ul>` beginning at L17:C8. Expected `<ul>` to be at an indentation of 6 but was found at 8.  block-indentation\n  18:12  error  Incorrect indentation for `<li>` beginning at L18:C12. Expected `<li>` to be at an indentation of 10 but was found at 12.  block-indentation\n  3:28  error  img tags must have an alt attribute  img-alt-attributes\n  14:28  error  img tags must have an alt attribute  img-alt-attributes\n  3:28  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });
  QUnit.test('horizons/templates/components/contact-form.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'horizons/templates/components/contact-form.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('horizons/templates/contact.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'horizons/templates/contact.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('horizons/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'horizons/templates/index.hbs should pass TemplateLint.\n\nhorizons/templates/index.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `<div>` beginning at L3:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  4:12  error  Incorrect indentation for `<h1>` beginning at L4:C12. Expected `<h1>` to be at an indentation of 10 but was found at 12.  block-indentation\n  5:12  error  Incorrect indentation for `<p>` beginning at L5:C12. Expected `<p>` to be at an indentation of 10 but was found at 12.  block-indentation\n  5:15  error  Incorrect indentation for `\n                Stop settling for the same horizon day after day. Get out and explore the unknown. View sights unseen and\n                travel to places unvisited.\n            ` beginning at L5:C15. Expected `\n                Stop settling for the same horizon day after day. Get out and explore the unknown. View sights unseen and\n                travel to places unvisited.\n            ` to be at an indentation of 14 but was found at 16.  block-indentation\n  13:4  error  Incorrect indentation for `<div>` beginning at L13:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  23:4  error  Incorrect indentation for `<h1>` beginning at L23:C4. Expected `<h1>` to be at an indentation of 2 but was found at 4.  block-indentation\n  26:4  error  Incorrect indentation for `<p>` beginning at L26:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n  29:4  error  Incorrect indentation for `<div>` beginning at L29:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  14:8  error  Incorrect indentation for `<div>` beginning at L14:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  17:8  error  Incorrect indentation for `<div>` beginning at L17:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  18:12  error  Incorrect indentation for `<span>` beginning at L18:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  19:12  error  Incorrect indentation for `<span>` beginning at L19:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  23:8  error  Incorrect indentation for `\n        Find out more\n    ` beginning at L23:C8. Expected `\n        Find out more\n    ` to be at an indentation of 6 but was found at 8.  block-indentation\n  26:7  error  Incorrect indentation for `\n        If you\'d like to get in touch, fill out the form bellow and we\'ll get back to you ASAP.\n    ` beginning at L26:C7. Expected `\n        If you\'d like to get in touch, fill out the form bellow and we\'ll get back to you ASAP.\n    ` to be at an indentation of 6 but was found at 8.  block-indentation\n  30:8  error  Incorrect indentation for `<form>` beginning at L30:C8. Expected `<form>` to be at an indentation of 6 but was found at 8.  block-indentation\n  31:12  error  Incorrect indentation for `<input>` beginning at L31:C12. Expected `<input>` to be at an indentation of 10 but was found at 12.  block-indentation\n  32:12  error  Incorrect indentation for `<input>` beginning at L32:C12. Expected `<input>` to be at an indentation of 10 but was found at 12.  block-indentation\n  33:12  error  Incorrect indentation for `<textarea>` beginning at L33:C12. Expected `<textarea>` to be at an indentation of 10 but was found at 12.  block-indentation\n  35:12  error  Incorrect indentation for `<button>` beginning at L35:C12. Expected `<button>` to be at an indentation of 10 but was found at 12.  block-indentation\n  40:4  error  Incorrect indentation for `<h1>` beginning at L40:C4. Expected `<h1>` to be at an indentation of 2 but was found at 4.  block-indentation\n  43:4  error  Incorrect indentation for `<small>` beginning at L43:C4. Expected `<small>` to be at an indentation of 2 but was found at 4.  block-indentation\n  40:8  error  Incorrect indentation for `\n        The horizon changes, but the sun does not.\n    ` beginning at L40:C8. Expected `\n        The horizon changes, but the sun does not.\n    ` to be at an indentation of 6 but was found at 8.  block-indentation\n');
  });
  QUnit.test('horizons/templates/privacy.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'horizons/templates/privacy.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('horizons/templates/terms.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'horizons/templates/terms.hbs should pass TemplateLint.\n\n');
  });
});
define("horizons/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/contact-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/contact-form-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/aboute-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/aboute-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/contact-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/privacy-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/privacy-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/terms-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/terms-test.js should pass ESLint\n\n');
  });
});
define("horizons/tests/test-helper", ["horizons/app", "horizons/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("horizons/tests/unit/routes/aboute-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | aboute', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:aboute');
      assert.ok(route);
    });
  });
});
define("horizons/tests/unit/routes/contact-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | contact', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contact');
      assert.ok(route);
    });
  });
});
define("horizons/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("horizons/tests/unit/routes/privacy-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | privacy', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:privacy');
      assert.ok(route);
    });
  });
});
define("horizons/tests/unit/routes/terms-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | terms', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:terms');
      assert.ok(route);
    });
  });
});
define('horizons/config/environment', [], function() {
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

require('horizons/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
