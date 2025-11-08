var express = require('express');
var router = express.Router();

var projects = [
  {
    name: 'Kali Linux Portfolio',
    tech: [ 'javascript', 'Typescript'],
    link: 'https://github.com/Alex-Unnippillil/kali-linux-portfolio'
  },
  {
    name: 'Tic Tac Toe Game',
    tech: ['JavaScript', 'CSS', 'HTML','Typescript'],
    link: 'https://github.com/Alex-Unnippillil/tictactoe'
  }
];

router.get('/', function(req, res) {
  res.render('home', { title: 'Home' });
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'About' });
});

router.get('/projects', function(req, res) {
  res.render('projects', { title: 'Projects', projects: projects });
});

router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;

