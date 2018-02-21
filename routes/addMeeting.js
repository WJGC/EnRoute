/*
 * GET home page.
 */

var meetingsCreated = require("../meetingsCreated.json");
var friendsList = require("../friends.json");

exports.addMeeting = function(req, res){
  let friend = req.query.friendName;
  var found = false;

  //res.render('addMeeting');
  for (var key in friendsList.friends) {
    console.log(key.name);
    if(key.name == friend) {
      found  = true;
      break;
    }
  }

  if(found) {
    var newMeeting = {
    	//"meetingLocation" : req.query.meetingLocation,
    	//"altitude" : req.query.altitude,
    	//"longitude" : req.query.longitude,
    	"meetingName" : req.query.meetingName,
    	"time" : req.query.meetingTime,
    	//"creator" : req.query.creator,
    	"invited" : friend
    }

    meetingsCreated.meetingsCreated.push(newMeeting);
    res.render('home', meetingsCreated);
  } else {
    alert("You have not added this friend!");
    res.render('addMeeting');
  }
};
