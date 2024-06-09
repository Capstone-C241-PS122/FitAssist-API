const express = require('express');
const router = express.Router();
const libraryCont = require('../controller/library');

router.post('/home/library',libraryCont.createLibrary);
router.get('/library', libraryCont.getAllLibraries);
router.delete('/library/:id_library',libraryCont.deleteLibrary);

module.exports = router;