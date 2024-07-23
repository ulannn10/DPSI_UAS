const express = require('express');
const { searchTourism, getTourismDetail } = require('../controllers/tourismcontroller');
const auth = require('../middlewares/authmiddleware');
const router = express.Router();

router.get('/search', auth, searchTourism);
router.get('/:id', auth, getTourismDetail);

module.exports = router;
