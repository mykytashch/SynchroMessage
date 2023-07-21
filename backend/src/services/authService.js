//authService.js

const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.createUser = async (userData) => {
  // Hash the password before storing in database
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = new User({
    username: userData.username,
    password: hashedPassword,
  });
  return await user.save();
};

exports.authenticateUser = async (username, password) => {
  const user = await User.findOne({ username: username });
  if (user) {
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      return user;
    }
  }
  throw new Error('Invalid username or password');
};

