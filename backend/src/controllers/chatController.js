//chatController.js

const chatService = require('../services/chatService');

exports.sendMessage = async (req, res) => {
  try {
    const message = await chatService.createMessage({
      user: req.user.id,
      text: req.body.text,
    });
    res.status(201).json(message);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.editMessage = async (req, res) => {
  try {
    const updatedMessage = await updateMessage(req.params.id, req.body);
    res.status(200).json(updatedMessage);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the message' });
  }
};
