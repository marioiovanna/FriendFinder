
var dogs = require("../data/friends.js");

module.exports = function (app) {

    app.get('/friends', function (req, res) {
        return res.json(dogs);
    });

    app.post('/friends', function (req, res) {

        // var newdogs = req.body;

        var closest = 30;
        var userName = req.body.name;
        var userPhoto = req.body.picture;
        var scoreArray = req.body.scores;
        matchUp();

        function matchUp() {
            var sumArray = [];
            var sum = 0;
            var closestNumber = 0;

            for (var i = 0; i < friends.length; i++) {

                for (var j = 0; j < scoreArray.length; j++) {
                    sum += (Math.abs(scoreArray[j] - friends[i].scores[j]));
                }
                sumArray.push(sum);
                sum = 0;
            }
            for (var i = 0; i < sumArray.length; i++) {
                if (sumArray[i] < closest) {
                    closest = sumArray[i];
                    closestNumber = i;
                }
            }

            var match = friends[closestNumber];


            friends.push(req.body);

            var string = JSON.stringify(match)
            res.end(string);

            // dogs.push(newdogs);
            // res.json(dogs);
        }
    });

    app.use(function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
};
