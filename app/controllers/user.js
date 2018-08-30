const model = require('../models');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const shortId = require('short-id');


module.exports = {
  userRegister: (req, res) => {
    const userSalt = shortId.generate();
    model.User.create({
      fullname: req.body.fullname,
      username: req.body.username,
      password: crypto.createHmac('sha256', userSalt).update(req.body.password).digest('hex'),
      email: req.body.email,
      reputation: 100,
      salt: userSalt,
      role: 'USER'
    })
    .then((user) => {
      res.send({
        status_code: 200,
        message: 'Register successfully',
        data: user
      })
    })
    .catch((err) => {
      res.send({
        status_code: 400,
        message: err
      })
    })
  },
  getUserDetails: (req, res) => {
    model.User.find({
      where: {
        id: req.params.userId
      },
      include: [{ model: model.Answer }]
    }).then((user) => {
      res.send({
        status_code: 200,
        data: user,
        message: 'Get one user'
      })
    })
  },
  getAllUser: (req, res) => {
    model.User.findAll().then((users) => {
      if (users) {
        res.send({
          status_code: 200,
          message: 'Get users successfully',
          data: users
        })
      } else {
        res.send({
          status_code: 400,
          message: 'Something error with your request',
        })
      }
    })
  },
  deleteUser: (req, res) => {
    model.User.destroy({
      where: {
        id: req.params.userId
      }
    })
    .then((user) => {
      res.send({
        status_code: 200,
        message: 'User has been deleted',
      })
    })
    .catch((err) => {
      res.send({
        status_code: 400,
        message: err
      })
    })
  }
};
