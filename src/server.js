require('dotenv').config();

const knex = require('knex'),
  app = require('./app'),
  { PORT, DATABASE_URL } = require('./config');

const db = knex({
  client: 'pg',
  connection: DATABASE_URL,
});

app.set('db', db);

// Catch-all 404
// app.use(function (req, res, next) {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // Catch-all Error handler
// // Add NODE_ENV check to prevent stacktrace leak
// app.use(function (err, req, res, next) {
//   res.status(err.status || 500);
//   res.json({
//     message: err.message,
//     error: app.get('env') === 'development' ? err : {}
//   });
// });

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});