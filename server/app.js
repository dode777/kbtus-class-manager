const express = require('express');
const app = express();
require('dotenv').config();

const helmet = require('helmet');
const morgan = require('morgan');

app.use(helmet());
app.use(morgan('dev'));

app.get('/', () => {
  res.send();
});

module.exports = app;
