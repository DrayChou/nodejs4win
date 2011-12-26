
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { name: 'Express',items:['AAA','BBB','CCC'] });
};