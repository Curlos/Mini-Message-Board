var express = require('express');
var router = express.Router();
const moment = require('moment')

const messages = [
  {
    text: "Will you go out with me?",
    user: "Charles",
    added: moment("20111031", "YYYYMMDD").fromNow()
  },
  {
    text: "I have a boyfriend",
    user: "Alexa",
    added: moment("20160620", "YYYYMMDD").fromNow()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

/* GET new form. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Express' });
});

/* POST new message from form. */
router.post('/new', function(req, res, next) {
  const { messageText, messageUser } = req.body
  console.log(req.body)
  console.log('posting bois')
  messages.push({text: messageText, user: messageUser, added: moment(new Date()).fromNow()});
  res.redirect('/')
});

module.exports = router;
