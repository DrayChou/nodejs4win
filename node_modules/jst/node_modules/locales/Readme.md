# Internationalization for node.js

## Installation

via npm:

    npm install locales

## Usage

    var locales = require('locales'),
        _ = locales.gettext,
        _n = locales.ngettext;

    locales.configure({
      lang: 'zh_CN',
      locales: __dirname + '/locales'
    });

    {{ _("Hello World") }}
    {{ _("Hello {name}", {name: "World"}) }}

    {{ _n("There is a template", "There are {n} templates", 3) }}

    // ./locales/zh_CN.js
    {
      "Hello World": "你好世界",
      "Hello {name}": "你好{name}",
      "There is a template": "有一个模板",
      "There are {n} templates": "有{n}个模板",
    }

    // Within expressjs
    app.use(locales.detector);

## License 

(The MIT License)

Copyright (c) 2011 Shaun Li <shonhen@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

