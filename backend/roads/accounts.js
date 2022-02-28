const express = require('express');
const router = express.Router();
const accountCtrl = require('../controllers/accounts');

router.post('/signup', accountCtrl.signup);
router.post('/login', accountCtrl.login);

module.exports = router;