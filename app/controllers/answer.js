const model = require('../models');

module.exports = {
  createAnswer: async (req, res) => {
    try {
      const newAnswer = await model.Answer.create({
        answer_author_id: req.body.answer_author_id,
        question_id: req.body.question_id,
        content_answer: req.body.content_answer,
        vote: 0
      })
      res.status(201).send({
        status_code: 201,
        message: 'Successfully create new Answer',
        data: newAnswer
      })
    } catch (error) {
      res.send({
        status_code: 500,
        message: error
      })
    }
  }
}