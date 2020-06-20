const Compiler = require("./compiler");

const options = require("../mypack.config.js")

new Compiler(options).run();
