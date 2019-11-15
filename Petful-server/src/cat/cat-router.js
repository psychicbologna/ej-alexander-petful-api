const express = require('express');
const catsService = require('./cat-service');


const catRouter = express.Router();

catRouter
  .route('/')
  .get((req, res, next) => {
    catsService.getCats(req.app.get('db'))
      .then(cats => res.json(cats))
      .catch(next);
  })
  .delete((req, res, next) => {
    res.send('Cat Delete!');
  })

module.exports = catRouter;