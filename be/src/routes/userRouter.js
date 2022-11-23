const express = require('express');
const router = express.Router();
const userCtrl = require('../app/controllers/userCtrl');

router.post('/login', userCtrl.login);
router.get('/user', userCtrl.getUser);

module.exports = router;