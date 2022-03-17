const express = require('express');
const router = express.Router();
const auth = require('../middleware/authToken');
const accountCtrl = require('../controllers/accounts');

router.post('/signup', accountCtrl.signup);
router.post('/login', accountCtrl.login);
router.get('/permissions', auth, accountCtrl.checkPermissions)

module.exports = router;