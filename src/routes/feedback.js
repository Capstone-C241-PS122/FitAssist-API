const express = require('express');
const router = express.Router();
const feedbackCont = require('../controller/feedback');

router.post('/feedback', feedbackCont.createFeedback);

module.exports = router;