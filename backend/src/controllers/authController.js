//authController.js

const User = require('../models/User');
const authService = require('../services/authService');
const passport = require('passport');

exports.register = async (req, res) => {
  try {
    await authService.createUser(req.body);
    res.redirect('/login');
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect('/login'); // Redirect to /login when authentication fails
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/chat'); // Redirect to /chat when authentication is successful
    });
  })(req, res, next);
};


exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.redirect('/login');
  });
};
