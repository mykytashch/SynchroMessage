//Message.js


const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;