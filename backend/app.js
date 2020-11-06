require("./config/mongoose");

var createError = require("http-errors");
var express = require("express");
var session = require('express-session');
var passport = require('passport');
var path = require("path");
var dotenv = require('dotenv');
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var productsRouter =require("./routes/products");

dotenv.config();
var app = express();
// CORS headers to support Cross-site HTTP requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
})




app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//validate the session
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized:false //the session cookie will not be set on the browser unless the session is modified
}));

//passport configuration
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use('/products', productsRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
