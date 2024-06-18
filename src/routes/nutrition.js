const express = require('express');
const router = express.Router();
const {predictNutrition} = require('../controller/nutrition');

router.get('/nutrition', predictNutrition);

module.exports = router; 
