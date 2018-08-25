const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

router.post('/auth', UserController.userRegister);
router.get('/users', UserController.getAllUser);
router.get('/users/:userId', UserController.getUserDetails);
router.delete('/users/:userId', UserController.deleteUser);

module.exports = router;
