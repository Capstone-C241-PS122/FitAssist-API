const express = require('express');
const router = express.Router();
const nutritionCont = require('../controller/nutrition');

//belum lengkap
router.post('/nutrition', nutritionCont.predictNutrition);


module.exports = router; //blm fix