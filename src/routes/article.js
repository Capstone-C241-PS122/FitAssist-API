const express = require('express');
const router = express.Router();
const { getArticleByBodyPart, getAllArticles, getArticleById  } = require('../controller/article');


router.get('/search', getArticleByBodyPart);
router.get('/articles', getAllArticles);
router.get('/articles/:id', getArticleById);

module.exports = router;