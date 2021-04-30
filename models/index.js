// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//Products will fall within the Categories
Product.belongsTo(Category, {
foreignKey: 'category_id',
onDelete: 'CASCADE',
});
//Each Category can have many products
Category.hasMany(Product, {
foreignKey: 'category_id',
});
Product.belongsToMany(Tag, {
through: {
  model: ProductTag,
}
});
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
  }
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
