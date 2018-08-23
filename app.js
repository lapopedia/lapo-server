const express = require('express');
const bodyPars = require('body-parser');
const index = require('./app/routes/index');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyPars.json());
app.use(bodyPars.urlencoded({extended: false}));

app.use('/api', index);

app.listen(3000, () => {
  console.log('Server running');
})
