const Product = require('./Product');
const Artist = require('./Artist');
const Heat = require('./Heat');
const ProductHeat = require('./ProductHeat');
const User = require('./User');
const Project = require('./Project');

Product.belongsTo(Artist, {foreignKey: 'artist_id', onDelete: "CASCADE",
});

Artist.hasMany(Product, {foreignKey: 'artist_id',
});

Product.belongsToMany(Heat, {
  through: ProductHeat, foreignKey: "product_id" });

Heat.belongsToMany(Product, { through: ProductHeat, foreignKey: "heat_id"  });

User.hasMany(Product, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Product.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = {
  Product,
  Artist,
  Heat,
  ProductHeat,
  User,
  Project 
};
