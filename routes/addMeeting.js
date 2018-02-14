/*
 * GET home page.
 */

var meetings = require("../meetings.json");

exports.addFriend = function(req, res){
  var newMeeting = {
  	"meetingLocation" = req.query.meetingLocation,
  	"altitude" = req.query.altitude,
  	"longitude" = req.query.longitude,
  	"meetingName" = req.query.meetingName,
  	"time" = req.query.time,
  	"creator" = req.query.creator,
  	"invited" = req.query.invited,
  }

  meetings.meetings.push(newMeeting);
  res.render('index', friends);
};

/*exports.addMeeting = function(req, res){
  res.render('index');
};*/