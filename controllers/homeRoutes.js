const router = require('express').Router();
const { Product, User, Artist, Heat, ProductHeat } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all products and JOIN with user data
    const productData = await Product.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Artist,
          attributes: ['artist_name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const products = productData.map((product) => product.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      products,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Heat,
          through: ProductHeat,
        },
      ],
    });

    const product = productData.get({ plain: true });
    // console.log(product)
    res.render('product', {
      ...product,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Product }],
    });

    const user = userData.get({ plain: true });
    const artistData = await Artist.findAll({});
    const artists = artistData.map((artist) => artist.get({ plain: true }));

    const heatData = await Heat.findAll({});
    const heats = heatData.map((heat) => heat.get({ plain: true }));

    res.render('profile', {
      ...user,
      artists,
      heats,

      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
