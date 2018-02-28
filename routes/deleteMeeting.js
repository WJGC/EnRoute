/*
 * GET delete meeting.
 */

var meetingsCreated = require("../public/json/meetingsCreated.json");

exports.delete = function(req, res){
	var meeting = req.query.deleteMeeting;
	//delete meetingsCreated.meetingsCreated.meeting;

	for(var obj in meetingsCreated.meetingsCreated) {
		if(String(obj.meetingName) === String(meeting)) {
			delete meetingsCreated.meetingsCreated.obj;
		}
	}

	res.render('meetingsCreated', meetingsCreated);
};