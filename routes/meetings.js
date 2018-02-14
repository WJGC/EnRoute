
/*
 * GET home page.
 */

var meetingsCreated = require("../meetingsCreated.json");
var meetingsJoined = require("../meetingsJoined.json");

exports.view = function(req, res){
  res.render('meetings', meetingsCreated);
  //res.render('meetings', meetingsJoined);
};

/*exports.addMeeting = function(req, res){
  res.render('index');
};*/