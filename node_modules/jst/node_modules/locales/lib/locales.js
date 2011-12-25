var fs = require('fs'),
    path = require('path'),
    hash = require('./hash');

var _options = {
      lang: 'unknown',
      disabled: false
    },
    _locales = {};

exports.configure = function(options) {
  for (var prop in options)
    _options[prop] = options[prop];
}

function load(ctx) {
  var ck = hash.crc32(ctx);

  if (typeof _locales[_options.lang] === 'undefined') {
    var filename = _options.locales + '/' + _options.lang + '.json';
    if (path.existsSync(filename))
      try {
        var data = JSON.parse(fs.readFileSync(filename, 'utf8'));
        _locales[_options.lang] = {};
        for (var key in data)
          _locales[_options.lang][hash.crc32(key)] = data[key];
      } catch(e) {
        delete _locales[_options.lang];
      }
  }

  return _locales[_options.lang] && _locales[_options.lang][ck] || ctx;
}

/**
 * gettext('Hello {name}', {name: 'World'})
 */
exports.gettext = function(ctx, args) {
  if (!_options.disabled)
    ctx = load(ctx);

  for (var name in args) {
    var re = RegExp('\\{' + name + '\\}', 'g');
    ctx = ctx.replace(re, args[name]);
  }
  return ctx;
}

/**
 * ngettext('There is a template', 'There are {n} templates', n)
 */
exports.ngettext = function(singular, plural, n) {
  var ctx = n === 1 ? singular : plural;

  if (!_options.disabled)
    ctx = load(ctx);

  return ctx.replace(/\{n\}/g, n);
}

/**
 * app.use(detector);
 */
const langre = /^([a-z]{2})(-([a-zA-Z]{2}))?/;

exports.detector = function(req, res, next) {
  if (typeof req.lang === 'undefined') {
    var lang = req.headers['accept-language'] || 'unknown', m;
    if (lang !== 'unknown' && (m = langre.exec(lang)) !== null)
      lang = m[1] + (m[3] && '_' + m[3].toUpperCase() || '');
    _options.lang = req.lang = lang;
  } else {
    _options.lang = req.lang;
  }
  next();
}

