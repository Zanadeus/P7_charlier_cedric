const express = require('express');
const router = express.Router();
const auth = require('../middleware/authToken');

const profilesCtrl = require('../controllers/profiles');

router.get('/:userName', auth, profilesCtrl.getOneProfile);
router.put('/:userName', auth, profilesCtrl.modifyProfile);
router.delete('/:userName', auth, profilesCtrl.deleteProfile);

module.exports = router;