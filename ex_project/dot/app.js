
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , dot_express = require('dot');

var app = module.exports = express.createServer();

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set("view engine", "html");
  //app.register(".html", dot_express);
  app.register(".html", { compile: function(str, options) { return dot_express.template(str, null, options); } });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.set('view options', { layout: false });
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes
app.get('/', routes.index);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
