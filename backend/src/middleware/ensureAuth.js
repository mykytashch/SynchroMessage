// middleware/ensureAuth.js

module.exports = function ensureAuth(req, res, next) {
  if (req.isAuthenticated()) { // метод `isAuthenticated` предоставляется Passport.js
    return next();
  }
  // если пользователь не аутентифицирован, перенаправить его на страницу входа
  res.redirect('/login');
};
