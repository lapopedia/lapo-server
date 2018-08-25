const model = require('../models');

module.exports = {
  createQuestion: async (req, res) => {
    try { 
      const { authorId } = req.params;
      const newQuestions = await model.Question.create({
        author_id: authorId,
        content: req.body.content,
        title: req.body.title,
        vote: 0,
        tag: [],
        is_active: true
      })
      res.status(201).send({
        status_code: 201,
        message: 'Successfully create new questions',
        data: newQuestions
      })
    } catch (error) {
      console.log('questions error ', error);
      res.send({
        status_code: 500,
        message: error
      })
    }
  },
  getAllQuestions: async (req, res) => {
    try {
      const allQuestions = await model.Question.findAll({
        include: [{ all: true }]
      });
      res.send({
        status_code: 200,
        message: 'Get All Questions',
        data: allQuestions
      })
    } catch (error) {
      res.send({
        message: error,
        status_code: 500
      })
    }
  }
};