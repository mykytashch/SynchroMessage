//chatService.js

const Message = require('../models/Message');
const markdownIt = require('markdown-it');
const md = new markdownIt();

exports.createMessage = async (messageData) => {
  const message = new Message({
    user: messageData.user,
    text: md.render(messageData.text),
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return await message.save();
};

exports.updateMessage = async (id, messageData) => {
  try {
    const updatedMessage = await Message.findByIdAndUpdate(
      id,
      { 
        text: md.render(messageData.text),
        updatedAt: new Date() 
      },
      { new: true }
    );
    return updatedMessage;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


exports.getMessages = async (userId, page = 1, limit = 10) => {
  try {
    const skip = (page - 1) * limit;
    const messages = await Message.find({ user: userId })
      .sort({ createdAt: -1 }) // Use the sort method here
      .skip(skip)
      .limit(limit);

    return messages;
  } catch (err) {
    throw err;
  }
};
