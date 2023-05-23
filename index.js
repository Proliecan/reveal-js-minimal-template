var host = "127.0.0.1";
var port = 1337;
var express = require("express");
var path = require("path");
var dirname = path.join(__dirname, "public");

var app = express();
app.use('/', express.static(dirname));
app.listen(port, host);

// blue color for console.log
const blue = '\x1b[34m';
const reset = '\x1b[0m';
console.log("Hosting directory: ", dirname);
console.log("Server running at", blue, "http://" + host + ":" + port, reset);
console.log("Press Ctrl+C to stop server");


// https://revealjs.com/installation/#installing-from-npm
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

let deck = new Reveal({
   plugins: [ Markdown ]
})
deck.initialize();