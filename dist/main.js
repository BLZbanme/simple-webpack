(function(modules) {
            function require(filename) {
                var fn = modules[filename];
                var module = {exports: {}};

                fn(require, module, module.exports);
                
                return module.exports;
            }

            require('')
        })({'': function (require, module, exports) { "use strict";

var people = {
  name: "",
  sayname: function sayname() {
    var _this = this;

    return function () {
      _this.name;
    };
  }
}; },})