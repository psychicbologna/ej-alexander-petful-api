require('dotenv').config();
const express = require('express'),
  morgan = require('morgan'),
  cors = require('cors'),
  helmet = require('helmet'),
  { NODE_ENV } = require('./config');

//Routers
//TODO path routers
const app = express();

const morganOption = (NODE_ENV === 'production');
const CatRouter = require('./cat/cat-router');
const DogRouter = require('./dog/dog-router');

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use('/api/dog', DogRouter);
app.use('/api/cat', CatRouter);

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    //basic error on production
    response = { error: { message: 'server error' } };
  } else {
    //more complex error for development
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
