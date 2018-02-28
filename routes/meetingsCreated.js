
/*
 * GET home page.
 */

var meetingsCreated = require("../public/json/meetingsCreated.json");

exports.meetingsCreated = function(req, res){
  res.render('meetingsCreated', meetingsCreated);
};
