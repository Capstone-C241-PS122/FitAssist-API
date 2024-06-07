const express = require("express");
const router = express.Router();

router.get('/home');
router.get('/body');
router.get('/saved');
router.get('/history');


module.exports = router;