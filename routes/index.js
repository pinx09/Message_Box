var express = require('express');
var router = express.Router();
const path = require("path");
const fs = require("fs");
const app = require('../app');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/home", function(req, res, next) {
  res.render("home");
});

router.post("/", function(req, res, next) {
  const senderName = req.body.senderName;
  const message = req.body.message;
  let content = `Sender name is: ${senderName} and the message for you is ${message}.`;
  fs.writeFile(path.join(__dirname, "../messages.txt"), content, function(err) {
    if (err) {
      console.log(err);
      return
    };
    res.render("submitted");
  });
});

router.post("/submit-form", function(req, res, next) {
  res.send("I am submit-form router.");
});

module.exports = router;