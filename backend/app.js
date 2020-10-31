require("./config/mongoose");
const createError = require("http-errors");
const express = require("express");

const morgan = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productsRouter =require("./routes/products");
const testAPIRouter = require("./routes/testAPI");

const app = express();
// CORS headers to support Cross-site HTTP requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
})




app.use(express.json());
app.use(morgan('dev'));

app.use("/users", usersRouter);
app.use('/products', productsRouter);
app.use("/testAPI", testAPIRouter);

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
  res.send("error");
});

module.exports = app;
