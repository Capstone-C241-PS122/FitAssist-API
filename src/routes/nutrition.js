const express = require('express');
const router = express.Router();
const nutritionCont = require('../controller/nutrition');
const createNutritionPredict = require('../controller/nutrition');

router.post('/nutrition', createNutritionPredict); //predict nutrition

module.exports = router;