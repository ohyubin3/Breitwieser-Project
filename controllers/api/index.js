const router = require('express').Router();
const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileRoutes');
const artistRoutes = require('./artist-routes');
const productRoutes = require('./product-routes');
const heatRoutes = require('./heat-routes');

router.use('/artists', artistRoutes);
router.use('/products', productRoutes);
router.use('/heats', heatRoutes);

router.use('/users', userRoutes);
router.use('/profile', profileRoutes);

module.exports = router;
