const express = require('express');
const router = express.Router();
const { getArticle } = require('../controller/article');


router.get('/search', getArticle);

module.exports = router;