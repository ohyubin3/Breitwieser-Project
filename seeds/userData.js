const { User } = require('../models');

const userData = [
    {
        "name": "Larry",
        "email": "sal@hotmail.com",
        "password": "password12345"
      },
      {
        "name": "Mark",
        "email": "lernantino@gmail.com",
        "password": "password12345"
      },
      {
        "name": "Anna",
        "email": "amiko2k20@aol.com",
        "password": "password12345"
      }
];


const seedUser = () => User.bulkCreate(userData,{
      individualHooks: true,
      returning: true,
    });

module.exports = seedUser;