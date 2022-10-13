const { ProductHeat } = require('../models');

const productHeatData = [
  {
    product_id: 1,
    heat_id: 4,
  },
  {
    product_id: 2,
    heat_id: 5,
  },
  {
    product_id: 3,
    heat_id: 3,
  },
  {
    product_id: 4,
    heat_id: 1,
  },
  {
    product_id: 5,
    heat_id: 7,
  },
];

const seedProductHeats = () => ProductHeat.bulkCreate(productHeatData);

module.exports = seedProductHeats;