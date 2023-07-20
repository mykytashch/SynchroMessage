const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/', chatController.sendMessage);
router.put('/:id', chatController.editMessage);

module.exports = router;
