const { Product } = require('../models');

const productData = [
  {
    product_name: 'Starry Night',
    description: 'example',
    price: 14.99,
    category_id: 1,
    filename: 'example',
  },
  {
    product_name: 'The Kiss',
    description: 'example',
    price: 90.0,
    category_id: 2,
    filename: 'example',
  },
  {
    product_name: 'Girl with a Pearl Earring',
    description: 'example',
    price: 22.99,
    category_id: 3,
    filename: 'example',
  },
  {
    product_name: 'Mona Lisa',
    description: 'example',
    price: 12.99,
    category_id: 4,
    filename: 'example',
  },
  {
    product_name: 'The Last Supper',
    description: 'example',
    price: 29.99,
    category_id: 4,
    filename: 'example',
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
