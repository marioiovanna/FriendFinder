
var path = require('path');


module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
    app.get("/survey.html", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    app.get("/css.css", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/css.css"))
    });
    app.get("/style.js", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/style.js"));
    });
    app.get("/friends.js", function (req, res) {
        res.sendFile(path.join(__dirname + "/../data/friends.js"))
    });
    // app.use(function(req, res){
    //     res.sendFile(path.join(__dirname + '/../public/home.html'));
    // });
};