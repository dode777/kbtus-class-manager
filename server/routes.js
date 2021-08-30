const express = require('express');
const router = express.Router();

const { getMainData } = require('./controllers/main');

router.get('/main-data', getMainData);

module.exports = router;
