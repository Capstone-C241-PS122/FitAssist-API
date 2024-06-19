const express = require('express');
const router = express.Router();
const videoCont = require('../controller/video');
const cacheVideos = require('./cacheMiddleware');

router.get('/video', cacheVideos, videoCont.getAllVideos);
router.get('/video/:id', cacheVideos, videoCont.getVideoById); 
router.post('/up/video', videoCont.getVideoByImg);


module.exports = router;