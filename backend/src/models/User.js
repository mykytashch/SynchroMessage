//User.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

// Функция для хеширования пароля перед сохранением пользователя
UserSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

// Функция для сравнения пароля пользователя с хешем
UserSchema.methods.comparePassword = async function (candidatePassword, cb) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    cb(null, isMatch);
  } catch (err) {
    cb(err);
  }
};

module.exports = mongoose.model('User', UserSchema);
