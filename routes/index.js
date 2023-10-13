const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/characters', require('./characters'));

module.exports = router;
