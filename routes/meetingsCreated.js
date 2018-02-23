
/*
 * GET home page.
 */

var meetingsCreated = require("../public/json/meetingsCreated.json");
//var meetingsJoined = require("../meetingsJoined.json");

exports.meetingsCreated = function(req, res){
  res.render('meetingsCreated', meetingsCreated);
  //res.render('meetings', meetingsJoined);
};
