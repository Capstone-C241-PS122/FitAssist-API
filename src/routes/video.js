const express = require('express');
const router = express.Router();
const videoCont = require('../controller/video');

router.get('/video', videoCont.getAllVideos); //getAll
router.get('/video/:id', videoCont.getVideoById); //getbyid
router.post('/up/video', videoCont.getVideoByImg);


module.exports = router;

