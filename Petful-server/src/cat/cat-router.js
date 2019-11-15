const express = require('express');
const xss = require('xss'); //remove when services done

const catRouter = express.Router();

catRouter
  .route('/')
  .get((req, res, next) => {
    res.send('Cat Get!');
  });

module.exports = catRouter;