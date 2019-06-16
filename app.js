var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var connection=require('../myapp/connection')

var indexRouter = require('./routes/index');
var createworker = require('./routes/createworker');
var deleteworker=require('./routes/deleteworker')
var createorder=require('./routes/createworkorder')
var assignment=require('./routes/assignment')
var fetch=require('./routes/fetchworkeroders')
var order=require('./routes/fetchOrderByDeadlines')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', createworker);
app.use('/', deleteworker);
app.use('/', createorder);
app.use('/', assignment);
app.use('/', fetch);
app.use('/', order);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

http .createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
