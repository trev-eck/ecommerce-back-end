const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

//Get all tags and their associated products
router.get('/', async (req, res) => {
  try{ 
      const tagData = await Tag.findAll({
      include: [{model: Product }],
    });
    res.status(200).json(tagData);
  } catch(err) {
    res.status(500).json(err);
  }
});

//Get a tag by ID and its associated products
router.get('/:id', async (req, res) => {
  try{ 
    const tagData = await Tag.findByPk(req.params.id,{
    include: [{model: Product }],
  });
  res.status(200).json(tagData);
} catch(err) {
  res.status(500).json(err);
}
});

//Create a new Tag
router.post('/', async (req, res) => {
  try{ 
    const tagData = await Tag.create({
    tag_name: req.body.tag_name,
  });
  res.status(200).json(tagData);
} catch(err) {
  res.status(500).json(err);
}
});

//Update a tag by its ID
router.put('/:id', async (req, res) => {
  try{ 
    const tagData = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(tagData);
} catch(err) {
  res.status(500).json(err);
}
});

//Delete a tag by its ID
router.delete('/:id', async (req, res) => {
  try{ 
    const tagData = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(tagData);
} catch(err) {
  res.status(500).json(err);
}
});

module.exports = router;
