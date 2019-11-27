const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
var ip = require('ip').address();
//const jwt = require('jsonwebtoken');

//check the path
const keys = require('../../config/keys');

const passport = require('passport');

// Load User model
//check if the path is ok
const User = require('../../models/User');

// @route   GET api/users/test
// @desc    Tests users route
router.get('/test', (req, res) => res.json({ msg: {ip} }));

// @route   POST api/users/register
// @desc    Register user
router.post('/register', (req, res) => {

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ message: 'Email already registered!', status: '400' });
    } else {

      const newUser = new User({
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   GET api/users/login
// @access  Public
router.post('/login', (req, res) => {
 
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      return res.status(404).json({ message: 'User does not exist!', status: '404' });
    }
    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        return res.status(200).json({ message: 'User logged in!', status: '200' });
      } else {
        return res.status(400).json({ message: 'Incorrect password!', status: '400' });
      }
    });
  });
});

module.exports = router;
