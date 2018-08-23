const express = require('express');
const bodyPars = require('body-parser');
const logger = require('morgan');
const index = require('./app/routes/index');
const cors = require('cors');

const app = express();

// Log requests to the console.
app.use(logger('dev'));

app.use(cors());

// Parse incoming requests data
app.use(bodyPars.json());
app.use(bodyPars.urlencoded({extended: false}));

app.use('/api', index);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;