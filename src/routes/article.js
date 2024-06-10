const express = require('express');
const router = express.Router();
const { getArticleByBodyPart, getAllArticles  } = require('../controller/article');


router.get('/search', getArticleByBodyPart);
router.get('/articles', getAllArticles);

module.exports = router;