/*
 * GET home page.
 */

var meetingsCreated = require("../public/json/meetingsCreated.json");
var friendsList = require("../friends.json");

exports.addMeeting = function(req, res){
  var friend = req.query.friendName;
  var found = false;

  /*res.render('addMeeting');
  for (var key in friendsList.friends) {
    console.log(key.name);
    if(key.name == friend) {
      found  = true;
      break;
    }
  }*/

  //if(found) {
    var newMeeting = {
    	//"meetingLocation" : req.query.meetingLocation,
    	"vicinity" : req.query.vicinity,
    	"address" : req.query.address,
    	"meetingName" : req.query.meetingName,
    	"time" : req.query.meetingTime,
    	"invited" : friend
    //}

    meetingsCreated.meetingsCreated.push(newMeeting);
    res.render('home', meetingsCreated);
  /*} else {
    alert("You have not added this friend!");
    res.render('addMeeting');
  }*/
};
