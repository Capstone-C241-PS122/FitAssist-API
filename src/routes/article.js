const express = require('express');
const router = express.Router();
const articleCont = require('../controller/article');

//belum lengkap
router.get('/article', articleCont.getArticle);

router.get('/article', articleCont.getArticleById);
router.get('/search/article', articleCont.searchArticle); 

module.exports = router;