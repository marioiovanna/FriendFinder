

var friendsData = require("../data/friends.js");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendsData)
    });

    app.post('/api/friends', function (req, res) {
        if (friendsData.length < 5) {
            friendsData.push(req.body);
            res.json(true)
        }
        else {
            friendsData.push(req.body);
            res.json(false);
        }
    })
};
