//authRoutes.js

const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', passport.authenticate('local', {
  successRedirect: '/chat', // Redirect on successful login
  failureRedirect: '/login', // Redirect on failed login
}));
router.get('/logout', authController.logout);

module.exports = router;
