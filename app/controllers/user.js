const model = require('../models');
const jwt = require('jsonwebtoken');

module.exports = {
  userRegister: (req, res) => {
    model.User.create({
      fullname: req.body.fullname,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      reputation: 100
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
  }
};
