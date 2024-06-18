const express = require('express');
const router = express.Router();
const videoCont = require('../controller/video');

router.get('/video', videoCont.getAllVideos);
router.get('/video/:id', videoCont.getVideoById); 
router.post('/up/video', videoCont.getVideoByImg);


module.exports = router;