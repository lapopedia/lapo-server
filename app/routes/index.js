const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');
const QuestionsController = require('../controllers/question');

router.post('/auth', UserController.userRegister);
router.get('/users', UserController.getAllUser);
router.get('/users/:userId', UserController.getUserDetails);
router.delete('/users/:userId', UserController.deleteUser);

router.post('/questions/ask/:authorId', QuestionsController.createQuestion);
router.get('/questions', QuestionsController.getAllQuestions);
router.get('/questions/:questionId', QuestionsController.getQuestionsDetails);

module.exports = router;
