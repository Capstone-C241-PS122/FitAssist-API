const express = require('express');
const router = express.Router();
const { getArticleByBodyPart, getAllArticles, getArticleById  } = require('../controller/article');
const cacheArticles = require('./cacheMiddleware');


router.get('/search', getArticleByBodyPart);
router.get('/articles', cacheArticles, getAllArticles);
router.get('/articles/:id', cacheArticles, getArticleById);

module.exports = router;