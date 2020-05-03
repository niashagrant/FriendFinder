var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./app/public"));

// just to see how to pages looked for myself

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// var apiRoutes = require("./app/routing/apiRoutes.js");
// // app.use(apiRoutes);

// var htmlRoutes = require("./app/routing/htmlRoutes.js");
// // app.use(htmlRoutes);

app.listen(PORT, function () {
  console.log("App listening on PORT http://localhost:" + PORT);
});
