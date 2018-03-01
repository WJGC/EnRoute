/*
 * GET new friend.
 */

var friends = require("../friends.json");

exports.addFriend = function(req, res){
  var newFriend = {
  	"name" : req.query.name,
  	"username" : req.query.username
  }

  friends.friends.push(newFriend);
  res.render('friendsB', friends);
};