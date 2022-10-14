const sequelize = require('../config/connection');
// const { User, Project } = require('../models');
const seedArtists = require('./artist-seeds');
const seedUser = require('./userData');
const seedProject = require('./projectData');
const seedProducts = require('./product-seeds');
const seedHeats = require('./heat-seeds');
const seedProductHeats = require('./productheat-seeds');

// const userData = require('./userData.json');
// const projectData = require('./projectData.json');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const project of projectData) {
//     await Project.create({
//       ...project,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   process.exit(0);
// };

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedArtists();
  console.log('\n----- ARTISTS SEEDED -----\n');

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');
  
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedHeats();
  console.log('\n----- HEATS SEEDED -----\n');

  await seedProductHeats();
  console.log('\n----- PRODUCT HEATS SEEDED -----\n');


  await seedProject();
  console.log('\n----- PROJECT SEEDED -----\n');

  process.exit(0);
};

seedAll();
// seedDatabase();
