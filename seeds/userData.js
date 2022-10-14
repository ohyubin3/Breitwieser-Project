const { User } = require('../models');

const userData = [
    {
        "name": "Name1",
        "email": "sal@hotmail.com",
        "password": "password12345"
      },
      {
        "name": "Name2",
        "email": "lernantino@gmail.com",
        "password": "password12345"
      },
      {
        "name": "Name3",
        "email": "amiko2k20@aol.com",
        "password": "password12345"
      }
];

const seedUser = () => User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

module.exports = seedUser;