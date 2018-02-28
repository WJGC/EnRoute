
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var home = require('./routes/home');
var meetingsCreated = require('./routes/meetingsCreated');
var meetingsJoined = require('./routes/meetingsJoined');
var friends = require('./routes/friends');
var addFriend = require('./routes/addFriend');
var addMeeting = require('./routes/addMeeting')
var signup = require('./routes/signup');
var logout = require('./routes/logout');
var deleteMeeting = require('./routes/deleteMeeting');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/home', home.view);
app.get('/meetingsCreated', meetingsCreated.meetingsCreated);
app.get('/meetingsJoined', meetingsJoined.meetingsJoined);
app.get('/friends', friends.view);
app.get('/addFriend', addFriend.addFriend);
app.get('/addMeeting', addMeeting.addMeeting);
app.get('/signedup', signup.addUser);
app.get('/logout', logout.logout);
app.get('/deleteMeeting', deleteMeeting.delete);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});//.listen(process.env.PORT || app.get('port'));
