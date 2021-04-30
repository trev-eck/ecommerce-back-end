const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//Get all of the current categories and their associated products
router.get('/', async (req, res) => {
  try{ 
  const categoryData = await Category.findAll({
    include: [{model: Product }],
  });
  res.status(200).json(categoryData);
} catch(err) {
  res.status(500).json(err);
}
});

//Get one category and all of its associated products
router.get('/:id', async (req, res) => {
  try{ 
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Product }],
    });
    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500).json(err);
  }
});

//Create a new category
router.post('/', async (req, res) => {
  // create a new category
  try{ 
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500).json(err);
}
});

//Update a specific category
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{ 
    const categoryData = await Category.update(req.body, {
      where: { 
        id: req.params.id,
      },
    });
    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500).json(err);
}
});

//delete a specific Category
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{ 
    const categoryData = await Category.destroy({
      where: { 
        id: req.params.id,
      },
    });
    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500).json(err);
}
});

module.exports = router;
