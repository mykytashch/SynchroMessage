const Message = require('../models/Message');

exports.postMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMessages = (req, res) => {
  // Logic to get messages goes here
};
