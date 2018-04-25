"use strict";

/* ======================================================================
                        MODULES
========================================================================= */
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());


/* ======================================================================
                        FUNCTIONS
========================================================================= */



/* ======================================================================
                        MAIN CODE
========================================================================= */

app.use("/static", express.static("public"));

// Using pug template engine
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("app");
});








// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

// Setting the PORT for the app to run on
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening on port:", port);
});
