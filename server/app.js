const express = require('express');
const app = express();
require('dotenv').config();

const helmet = require('helmet');
const morgan = require('morgan');
const router = require('./routes');

app.use(helmet());
app.use(morgan('dev'));
app.use('view', express.static('public'));

app.use('/api', router);

module.exports = app;
