const express = require('express');
const { sendMessage } = require('../controllers/messagecontroller');
const auth = require('../middlewares/authmiddleware');
const router = express.Router();

router.post('/', auth, sendMessage);

module.exports = router;
