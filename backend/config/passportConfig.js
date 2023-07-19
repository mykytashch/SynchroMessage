const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Неверное имя пользователя' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Неверный пароль' });
      }
      return done(null, user);
    });
  })
);
