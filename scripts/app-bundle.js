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
      config.map([{ route: '', name: 'home', moduleId: 'pages/home', title: 'Home', nav: true }, { route: 'about', name: 'about', moduleId: 'pages/about', title: 'About', nav: true }, { route: 'contact', name: 'contact', moduleId: 'pages/contact', title: 'Contact', nav: true }, { route: 'caesar-cipher', name: 'caesar-cipher', moduleId: 'pages/caesar-cipher', title: 'Caesar Cipher' }, { route: 'cipher-disk', name: 'cipher-disk', moduleId: 'pages/cipher-disk', title: 'Cipher Cipher' }]);
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
define('pages/caesar-cipher',['exports', 'service/cipher-service', 'aurelia-framework'], function (exports, _cipherService, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.CaesarCipher = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var CaesarCipher = exports.CaesarCipher = (_dec = (0, _aureliaFramework.inject)(_cipherService.CipherService), _dec(_class = function () {
        function CaesarCipher(cipherService) {
            _classCallCheck(this, CaesarCipher);

            this.cipherService = cipherService;
        }

        CaesarCipher.prototype.activate = function activate() {
            var _this = this;

            return this.cipherService.getMessages().then(function (messages) {
                return _this.messages = messages;
            });
        };

        return CaesarCipher;
    }()) || _class);
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
define('pages/home',['exports', 'aurelia-framework', 'service/cipher-service'], function (exports, _aureliaFramework, _cipherService) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Home = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Home = exports.Home = (_dec = (0, _aureliaFramework.inject)(_cipherService.CipherService), _dec(_class = function () {
        function Home(cipherService) {
            _classCallCheck(this, Home);

            this.cipherService = cipherService;
        }

        Home.prototype.activate = function activate() {
            var _this = this;

            return this.cipherService.getCiphers().then(function (ciphers) {
                return _this.ciphers = ciphers;
            });
        };

        return Home;
    }()) || _class);
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('service/cipher-service',['exports', 'aurelia-framework', 'aurelia-fetch-client', 'model/caesar-cipher-message'], function (exports, _aureliaFramework, _aureliaFetchClient, _caesarCipherMessage) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.CipherService = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var CipherService = exports.CipherService = (_dec = (0, _aureliaFramework.inject)(_aureliaFetchClient.HttpClient), _dec(_class = function () {
        function CipherService(http) {
            _classCallCheck(this, CipherService);

            http.configure(function (config) {
                config.withBaseUrl('src/service');
            });

            this.http = http;
        }

        CipherService.prototype.getCiphers = function getCiphers() {
            var _this = this;

            return this.http.fetch('/ciphers.json').then(function (response) {
                return response.json();
            }).then(function (json) {
                return _this.ciphers = json.ciphers;
            });
        };

        CipherService.prototype.getMessages = function getMessages() {
            var _this2 = this;

            return this.http.fetch('/messages.json').then(function (response) {
                return response.json();
            }).then(function (json) {
                return _this2.messages = json.messages;
            });
        };

        CipherService.prototype.getMessageWithCaesarCipher = function getMessageWithCaesarCipher(message, shift) {};

        return CipherService;
    }()) || _class);
});
define('model/CaesarCipherMessage',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var CaesarCipherMessage = exports.CaesarCipherMessage = function CaesarCipherMessage(decodedMessage, encodedMessage, shift) {
        _classCallCheck(this, CaesarCipherMessage);

        this.decodedMessage = decodedMessage;
        this.encodedMessage = encodedMessage;
        this.shift = shift;
    };
});
define('model/caesar-cipher-message',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var CaesarCipherMessage = exports.CaesarCipherMessage = function CaesarCipherMessage(decodedMessage, encodedMessage, shift) {
        _classCallCheck(this, CaesarCipherMessage);

        this.decodedMessage = decodedMessage;
        this.encodedMessage = encodedMessage;
        this.shift = shift;
    };
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <!-- Header -->\n  <header>\n    <nav class=\"navbar navbar-inverse\" role=\"navigation\">\n      <div class=\"container\">\n        <a route-href=\"route: home\"><p class=\"navbar-brand\">Ancient Ciphers | Ludum Dare 36</p></a>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li repeat.for=\"route of router.navigation\">\n            <a class=\"$index ? 'active' : ''\" href.bind=\"route.href\">${route.title}</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </header>\n  <!-- Main Content -->\n  <main>\n    <div class=\"container\">\n      <router-view></router-view>\n    </div>\n  </main>\n  <!-- Footer -->\n  <footer class=\"navbar\">\n    <div class=\"container\">\n      <hr />\n      <small class=\"copyright\">A past due Ludum Dare 36 entry by <a href=\"http://www.twitter.com/thecodingcouple\">Ashley Grenon</a>.</small>\n    </div>\n  </footer>\n</template>\n"; });
define('text!pages/about.html', ['module'], function(module) { module.exports = "<template>\r\n    <section class=\"panel-body\">\r\n        <h1>About</h1>\r\n        <p>\r\n            Ancient Ciphers is my (past due) submission for <a href=\"http://ludumdare.com/\">Ludum Dare 36</a>. \r\n            You can view the source on <a href=\"https://github.com/townsean/ludum-dare-36\">GitHub</a>.\r\n        </p>\r\n        <br />\r\n        <h4>About Ludum Dare</h4>\r\n        </p>\r\n            Ludum Dare is a themed game jam that occurs three times a year. \r\n            The theme for Ludum Dare 36 is \r\n            <a href=\"http://ludumdare.com/compo/ludum-dare-36/?action=preview\">Ancient Technology</a>.\r\n        </p>\r\n        <br />\r\n        <blockquote class=\"twitter-tweet\" data-lang=\"en\"><p lang=\"en\" dir=\"ltr\">The Theme for the community-run Ludum Dare event is: Ancient Technology. <a href=\"https://twitter.com/hashtag/LDJAM?src=hash\">#LDJAM</a> <a href=\"https://t.co/z4RZmPoOfQ\">pic.twitter.com/z4RZmPoOfQ</a></p>&mdash; Ludum Dare (@ludumdare) <a href=\"https://twitter.com/ludumdare/status/769338891593781248\">August 27, 2016</a></blockquote>\r\n        <script async src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\r\n    </section>\r\n</template>"; });
define('text!pages/caesar-cipher.html', ['module'], function(module) { module.exports = "<template>\r\n    <section class=\"panel-body\">        \r\n        <h1>Caesar Cipher</h1>    \r\n        <p>How many messages can you decode in 5 minutes?</p>\r\n        <a class=\"btn btn-primary\" role=\"button\" click.trigger=\"startChallenge()\">Start countdown</a>\r\n    </section>\r\n</template>"; });
define('text!pages/cipher-disk.html', ['module'], function(module) { module.exports = "<template>\r\n    <section class=\"panel-body\">        \r\n        <h1>Cipher Disk</h1> \r\n        <p>[Not implemented]</p>   \r\n    </section>\r\n</template>"; });
define('text!pages/contact.html', ['module'], function(module) { module.exports = "1 lines (11 sloc)  459 Bytes\r\n<template>\r\n    <section class=\"panel-body\">        \r\n        <h1>Contact</h1>\r\n        <p>Questions? Comments? Issues? Let me know!<br />\r\n            You can reach me on <strong>Twitter</strong> as \r\n            <a href=\"https://twitter.com/thecodingcouple\">@thecodingcouple</a> \r\n            or you can fill out a <strong>contact form</strong> \r\n            <a href=\"http://www.thecodingcouple.com/contact/\">here</a>.\r\n        </p>      \r\n    </section>\r\n</template>"; });
define('text!pages/home.html', ['module'], function(module) { module.exports = "<template>\r\n    <section class=\"panel-body\">        \r\n        <h2>Unlock hidden messages. Select a cipher:</h2>    \r\n        <div class=\"col-md-4\" repeat.for=\"cipher of ciphers\">\r\n            <figure class=\"thumbnail\">\r\n                <img class=\"img-thumbnail\" src=\"${cipher.imgUrl}\" alt=\"${cipher.title} picture\">\r\n                <figcaption class=\"caption\">\r\n                    <h3>${cipher.title}</h3>\r\n                    <p>${cipher.description}</p>\r\n                    <!-- Doh! Was stuck on this issue for longer than I care to admit:\r\n                    https://github.com/aurelia/router/issues/222 -->\r\n                    <a class=\"btn btn-primary\" role=\"button\" route-href=\"route.bind: cipher.name\">Decode messages</a>\r\n                </figcaption>\r\n            </figure>\r\n        </div>\r\n    </section>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map