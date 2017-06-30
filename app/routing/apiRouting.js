
var dogs = require("../data/friends.js");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        return res.json(dogs);
    });

    app.post('/api/friends', function (req, res) {
        var newdogs = req.body;
        dogs.push(newdogs);
        res.json(dogs);
    });

    app.use(function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
};
