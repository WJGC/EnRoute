
/*
 * GET home page.
 */

var meetingsCreated = require("../meetingsCreated.json");
//var meetingsJoined = require("../meetingsJoined.json");

exports.meetings = function(req, res){
  res.render('meetingsCreated', meetingsCreated);
  //res.render('meetings', meetingsJoined);
};
