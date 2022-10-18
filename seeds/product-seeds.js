const { Product } = require('../models');

const productData = [
  {
    product_name: 'Starry Night',
    product_desc:
      'An expressive night sky over a small hillside village. My cousin Tony is totally the guy who gave it to me',
    price: 999275,
    image_link:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',

    artist_id: 1,
    user_id: 1,
  },
  {
    product_name: 'The Kiss',
    product_desc:
      'The painting depicts a couple embracing in a field of flowers. Which is why it was so weird that I found it at a garage sale',
    price: 982665,
    image_link:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/800px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg',
    artist_id: 2,
    user_id: 3,
  },
  {
    product_name: 'Girl with a Pearl Earring',
    product_desc:
      "Vermeer's most famous painting of an imaginary figure. This painting has been in my family for a long time, problem is she looks just like my ex wife so she's got to go",
    price: 999999,
    image_link:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg',
    artist_id: 3,
    user_id: 2,
  },
  {
    product_name: 'Mona Lisa',
    product_desc:
      "An oil painting by Italian artist featuring a portrait of a seated woman set against an imaginary landscape. It was my grandmother's prized possession and she asked me to sell it for her",
    price: 885750,

    image_link:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',

    artist_id: 4,
    user_id: 1,
  },
  {
    product_name: 'The Last Supper',
    product_desc:
      " a snapshot of the moment Christ tells his Apostles that one of them will betray him. All I know is i didn't betray anyone to get it.",
    price: 992500,
    image_link:
      'https://www.discoverwalks.com/blog/wp-content/uploads/2020/05/the-last-supper-restored-da-vinci_32x16-scaled.jpg',
    artist_id: 4,
    user_id: 3,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
