const { Product } = require('../models');

const productData = [
  {
    product_name: 'Starry Night',
    product_desc: 'example',
    price: 14.99,
    stock: 2,
    image_link: "https://udexx.com",
    artist_id: 1,
  },
  {
    product_name: 'The Kiss',
    product_desc: 'example',
    price: 90.0,
    stock: 2,
    image_link: "https://udexx.com",
    artist_id: 2,
  },
  {
    product_name: 'Girl with a Pearl Earring',
    product_desc: 'example',
    price: 22.99,
    stock: 2,
    image_link: "https://udexx.com",
    artist_id: 3,
  },
  {
    product_name: 'Mona Lisa',
    product_desc: 'example',
    price: 12.99,
    stock: 2,
    image_link: "https://udexx.com",
    artist_id: 4,
  },
  {
    product_name: 'The Last Supper',
    product_desc: 'example',
    price: 29.99,
    stock: 2,
    image_link: "https://udexx.com",
    artist_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;