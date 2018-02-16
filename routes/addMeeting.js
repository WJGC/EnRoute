/*
 * GET home page.
 */

var meetingsCreated = require("../meetingsCreated.json");

exports.addMeeting = function(req, res){
  var newMeeting = {
  	//"meetingLocation" : req.query.meetingLocation,
  	//"altitude" : req.query.altitude,
  	//"longitude" : req.query.longitude,
  	"meetingName" : req.query.meetingName,
  	"time" : req.query.meetingTime,
  	//"creator" : req.query.creator,
  	"invited" : req.query.friendName
  }

  meetingsCreated.meetingsCreated.push(newMeeting);
  res.render('index', meetingsCreated);
};

/*exports.addMeeting = function(req, res){
  res.render('index');
};*/