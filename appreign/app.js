var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var getJSON = require('get-json');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reigndesign' );
var Reign = mongoose.model('Reign', mongoose.Schema({
	story_id: String,
  story_title: String,
	title: String,
	author: String,
	created_at: String
}));

var index = require('./routes/index');
var users = require('./routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
//llamar json

function init(){
  getJSON('https://hn.algolia.com/api/v1/search_by_date?query=nodejs', function(error, response){ mapNews(response.hits); }); //console.log(response)
}

function mapNews (news){
  if (news.length === 0) return;
  news.forEach(function(_new){
    Reign.find({story_id : _new.story_id}, function (err, docs) {
        if (!docs.length){
            var newObject = {
              story_id: _new.story_id,
              story_title: _new.story_title,
              title: _new.title,
              author: _new.author,
              created_at: _new.created_at
            };
            Reign.create(newObject, function(err, news){
            });
        }
    });
  });
}


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

init();

module.exports = app;
