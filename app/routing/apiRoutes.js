var friends = require("../data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    var userScores = req.body.scores;
    var userMatch;
    var mainDiff = 40;

    for (var i = 0; i < friends.length; i++) {
      var scoreDifference = 0;
      var userCurrentScore = friends[i].scores;
      for (var i = 0; i < userScores.length; i++) {
        var diff = Math.abs(user[i] - userCurrentScore[i]);
        console.log(diff);
        mainDiff += diff;
      }
      if (mainDiff < scoreDifference) {
        mainDiff = scoreDifference;
        userMatch = friends[i];
      }
    }
    friends.push(req.body);
    res.json(userMatch);
  });
};
