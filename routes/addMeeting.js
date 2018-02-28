/*
 * GET home page.
 */

var meetingsCreated = require("../public/json/meetingsCreated.json");

exports.addMeeting = function(req, res){

  var newMeeting = {
  	"meetingLocation" : req.query.vicinity,
  	"address" : req.query.address,
  	"meetingName" : req.query.meetingName,
  	"time" : req.query.meetingTime,
  	"invited" : req.query.friend
  }

  meetingsCreated.meetingsCreated.push(newMeeting);
  res.render('home', meetingsCreated);
};
