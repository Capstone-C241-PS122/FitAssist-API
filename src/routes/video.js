const express = require('express');
const router = express.Router();

router.get('/video'); //getAll
router.get('/video/:id'); //getbyid
router.get('up/video'); //getpredict


module.exports = router;