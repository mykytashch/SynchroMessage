const express = require('express');
const router = express.Router();
const diaryController = require('../controllers/diaryController');
const passport = require('passport');

// Защита маршрутов с использованием Passport.js
router.use(passport.authenticate('jwt', { session: false }));

router.post('/', diaryController.createEntry);
router.get('/', diaryController.getAllEntries);
router.get('/:id', diaryController.getEntryById);
router.put('/:id', diaryController.updateEntry);
router.delete('/:id', diaryController.deleteEntry);

module.exports = router;
