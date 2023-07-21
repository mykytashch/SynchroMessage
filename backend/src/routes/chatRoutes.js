//chatRoutes.js

const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const passport = require('../config/passport-config'); // Import passport configuration
const ensureAuth = require('../middleware/ensureAuth');

router.post('/message', ensureAuth, chatController.sendMessage);
router.put('/message/:id', ensureAuth, chatController.editMessage);

module.exports = router;
