const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  // Дополнительные поля модели User будут добавлены позже
});

module.exports = mongoose.model('User', userSchema);
