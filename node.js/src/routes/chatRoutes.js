const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/message', chatController.postMessage);
router.get('/messages', chatController.getMessages);

module.exports = router;
