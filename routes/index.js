const express = require('express');
const router = express.Router();
const survey = require('./survey');
const {getHome} = require('../controllers/survey');

router.get('/status', (req, res) => res.send('OK'));

router.get('/',getHome);
router.use('/api/survey',survey);

module.exports = router;