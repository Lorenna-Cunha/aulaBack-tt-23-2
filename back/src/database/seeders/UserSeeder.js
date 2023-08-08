const User = require("../../models/User");
const faker = require('faker-br');

const seedUser = async function () {
  try {
    await User.sync({ force: true });

    for (let i = 0; i < 10; i++) {
      await User.create({
        name: faker.name.firstName(),
        email: faker.internet.email(),
        birthday: faker.date.between(1990, 2004),
        phone: faker.phone.phoneNumber(),
        cpf: faker.br.cpf(),
      });
    }
  } catch (err) { 
    console.log(err); 
  }
};

module.exports = seedUser;
