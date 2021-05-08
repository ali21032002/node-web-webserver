//constant sections
const port = 3000;
const express = require("express");
const hbs = require("hbs");
const path = require("path");

//variable sections
var app = express();
var partialsDirPath = path.join(__dirname, "/views/partials");

//import requirement js files
require("./helper/helperUtil")(hbs);
require("./partials/partialsUtil")(partialsDirPath);
require("./helper/appConfigUtil")(app, express);

//routing sections
app
  .get("/", (req, res) => {
    let page = {
      title: "home page",
    };
    res.render("home", {
      page,
    });
  })
  .get("/about", (req, res) => {
    let page = {
      title: "About Page",
    };
    res.render("about", {
      page,
    });
  })
  .listen(port, (req, res) => {
    console.log(`app run on port ${port}`);
  });
