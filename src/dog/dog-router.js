const express = require('express');
const xss = require('xss'); //remove when services done
const dogsService = require('./dog-service');

const dogRouter = express.Router();

dogRouter
  .route('/')
  .get((req, res, next) => {
    dogsService.getDogs(req.app.get('db'))
      .then(dogs => res.json(dogs))
      .catch(next);
  });

module.exports = dogRouter;