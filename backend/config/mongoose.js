const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() =>
    console.log("MongoDB database connection is established successfully.")
  )
  .catch(console.error);
