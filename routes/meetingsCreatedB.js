/*
 * GET meetings createdB.
 */

var meetingsCreated = require("../public/json/meetingsCreated.json");

exports.meetingsCreated = function(req, res){
  res.render('meetingsCreatedJoinedB', meetingsCreated);
};