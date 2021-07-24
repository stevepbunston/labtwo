//used bootstrap from lesson 6 (nav bar)



var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var steveRouter = require('./routes/steve');
var jimmyRouter = require('./routes/jimmy');
var pattiRouter = require('./routes/patti');
var dougRouter = require('./routes/doug');
var headerRouter = require('./routes/header');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/steve', steveRouter);
app.use('/jimmy', jimmyRouter);
app.use('/patti', pattiRouter);
app.use('/doug', dougRouter);
app.use('/', headerRouter);

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

module.exports = app;
