/*
 * GET home page.
 */

var friends = require("../friends.json");

exports.view = function(req, res){
  res.render('friends', friends);
};

/*exports.addMeeting = function(req, res){
  res.render('index');
};*/