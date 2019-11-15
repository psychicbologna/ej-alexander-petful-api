const xss = require('xss');

const dogsService = {
  getDogs(db) {
    return db
      .from('dogs')
      .select('*');
  },
};

module.exports = dogsService;