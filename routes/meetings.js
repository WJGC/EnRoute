
/*
 * GET home page.
 */

var meetings = require("../data.json");

exports.view = function(req, res){
  res.render('index', meetings);
};

/*exports.addMeeting = function(req, res){
  res.render('index');
};*/