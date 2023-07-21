// passport-config.js - здесь вы настроите аутентификацию passport.js, подключив соответствующую стратегию (LocalStrategy, например), и методы serializeUser и deserializeUser.

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; 
const User = require('../models/User');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
    },
    async (username, password, done) => {
      try {
        const user = await User.findOne({ username: username });
        if (!user || user.password !== password) {
          return done(null, false);
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;
