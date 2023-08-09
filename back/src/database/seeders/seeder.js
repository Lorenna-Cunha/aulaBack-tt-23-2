require('../../config/dotenv')();
require('../../config/sequelize');

const seedModel = require('./UserSeeder');

(async () => {
  try {
    await seedModel();

  } catch (err) { console.log(err) }
})();
