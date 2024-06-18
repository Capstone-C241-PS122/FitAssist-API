const express = require("express");
const router = express.Router();

router.get('/home');
router.get('/mybody');
router.get('/saved');
router.get('/history');
router.get('/account');
router.get('/feedback');
router.get('/saved');


module.exports = router;