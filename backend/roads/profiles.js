const express = require('express');
const router = express.Router();
const auth = require('../middleware/authToken');
const multer = require('../middleware/multerConfig');

const profilesCtrl = require('../controllers/profiles');

router.post('/create', profilesCtrl.createProfile);
router.get('/:email', /*auth, */profilesCtrl.getOneProfile);
//router.put('/:pseudo', /*auth, */profilesCtrl.modifyProfile);
//router.delete('/:id', auth, userCtrl.deleteProfile);



module.exports = router;