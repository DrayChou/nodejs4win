
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { f1: "1", f2: "2", f3: "3"})
};