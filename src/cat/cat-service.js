const xss = require('xss');

const catsService = {
  getCats(db) {
    return db
      .from('cats')
      .select('*')
  },
};

module.exports = catsService;