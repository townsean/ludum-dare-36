define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;

      config.title = 'Ancient Ciphers';
      config.map([{ route: '', name: 'home', moduleId: 'pages/home', title: 'Home', nav: true }, { route: 'about', name: 'about', moduleId: 'pages/about', title: 'About', nav: true }, { route: 'contact', name: 'contact', moduleId: 'pages/contact', title: 'Contact', nav: true }]);
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('pages/caesar-cipher',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var CaesarCipher = exports.CaesarCipher = function CaesarCipher() {
        _classCallCheck(this, CaesarCipher);
    };
});
define('pages/cipher-disk',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var CipherDisk = exports.CipherDisk = function CipherDisk() {
        _classCallCheck(this, CipherDisk);
    };
});
define('pages/home',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Home = exports.Home = function Home() {
    _classCallCheck(this, Home);
  };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('pages/about',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var About = exports.About = function About() {
        _classCallCheck(this, About);
    };
});
define('pages/contact',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Contact = exports.Contact = function Contact() {
        _classCallCheck(this, Contact);
    };
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <!-- Header -->\n  <header>\n    <nav class=\"navbar navbar-inverse\" role=\"navigation\">\n      <div class=\"container\">\n        <a href=\"https://github.com/townsean/ludum-dare-36\"><p class=\"navbar-brand\">Ancient Ciphers | Ludum Dare 36</p></a>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li repeat.for=\"route of router.navigation\">\n            <a class=\"$index ? 'active' : ''\" href.bind=\"route.href\">${route.title}</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </header>\n  <!-- Main Content -->\n  <main>\n    <div class=\"container\">\n      <router-view></router-view>\n    </div>\n  </main>\n  <!-- Footer -->\n  <footer class=\"navbar\">\n    <div class=\"container\">\n      <hr />\n      <small class=\"copyright\">Ludum Dare 36 entry by <a href=\"http://www.twitter.com/thecodingcouple\">Ashley Grenon</a>.</small>\n    </div>\n  </footer>\n</template>\n"; });
define('text!pages/about.html', ['module'], function(module) { module.exports = "<template>\r\n    <section class=\"panel-body\">\r\n        <h1>About</h1>\r\n        <p>\r\n            Ancient Ciphers is my submission for <a href=\"http://ludumdare.com/\">Ludum Dare 36</a>!\r\n        </p>\r\n        </p>\r\n            Ludum Dare is a themed game jam that occurs three times a year. \r\n            The theme for Ludum Dare 36 is \r\n            <a href=\"http://ludumdare.com/compo/ludum-dare-36/?action=preview\">Ancient Technology</a>.\r\n        </p>\r\n    </section>\r\n</template>"; });
define('text!pages/caesar-cipher.html', ['module'], function(module) { module.exports = "<template>\r\n<template>\r\n    <section class=\"panel-body\">        \r\n        <h1>Caesar Cipher</h1>    \r\n    </section>\r\n</template>"; });
define('text!pages/cipher-disk.html', ['module'], function(module) { module.exports = "<template>\r\n<template>\r\n    <section class=\"panel-body\">        \r\n        <h1>Cipher Disk</h1>    \r\n    </section>\r\n</template>"; });
define('text!pages/contact.html', ['module'], function(module) { module.exports = "1 lines (11 sloc)  459 Bytes\r\n<template>\r\n    <section class=\"panel-body\">        \r\n        <h1>Contact</h1>\r\n        <p>Questions? Comments? Issues? Let me know!<br />\r\n            You can reach me on <strong>Twitter</strong> as \r\n            <a href=\"https://twitter.com/thecodingcouple\">@thecodingcouple</a> \r\n            or you can fill out a <strong>contact form</strong> \r\n            <a href=\"http://www.thecodingcouple.com/contact/\">here</a>.\r\n        </p>      \r\n    </section>\r\n</template>"; });
define('text!pages/home.html', ['module'], function(module) { module.exports = "<template>\r\n    <section class=\"panel-body\">        \r\n        <h1>Unlock the hidden message</h1>    \r\n    </section>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map