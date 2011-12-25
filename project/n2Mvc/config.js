/**
 * @author QLeelulu@gmail.com
 * @blog http://qleelulu.cnblogs.com
 */


var route = require('./route');

route.map({
    method:'get',
    url: /^\/$/i,
    controller: 'blog',
    action: 'index'
});

route.map({
    method:'get',
    url: /^\/blog\/?$/i,
    controller: 'blog',
    action: 'index'
});

route.map({
    method:'get',
    url: /^\/tweets\/?$/i,
    controller: 'blog',
    action: 'tweets'
});

route.map({
    method:'get',
    url: /^\/tweets_data\/?$/i,
    controller: 'blog',
    action: 'tweets_data'
});

exports.staticFileDir = 'static';
