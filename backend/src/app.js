// app.js

require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./config/passport-config');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;
const app = express();
const port = process.env.PORT || 3000;
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const User = require('./models/User'); // Здесь подставьте путь к модели User


// Настройка паспорта и стратегии passport-local
passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
    },
    async (username, password, done) => {
      try {
        const user = await User.findOne({ username: username });
        if (!user) {
          return done(null, false);
        }
        // Use bcrypt.compare to check passwords
        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            return done(err);
          }
          if (!isMatch) {
            return done(null, false);
          }
          return done(null, user);
        });
      } catch (err) {
        return done(err);
      }
    }
  )
);




// connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set this to true if you are using HTTPS, but for development, you can set it to false.
}));


app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/chat', chatRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(3000, () => {
  console.log('App listening at http://localhost:3000');
});

module.exports = app; // for testing
