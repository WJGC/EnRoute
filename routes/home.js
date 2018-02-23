/*
 * GET home page.
 */

var meetingsCreated = require("../public/json/meetingsCreated.json");

exports.view = function(req, res){
  res.render('home', meetingsCreated);
};