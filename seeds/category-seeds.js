const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Vincent van Gogh',
  },
  {
    category_name: 'Gustav Klimt',
  },
  {
    category_name: 'Johannes Vermeer',
  },
  {
    category_name: 'Leonardo Da Vinci',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
