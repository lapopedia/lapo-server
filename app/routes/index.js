const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

router.post('/auth', UserController.userRegister);

module.exports = router;
