const router = require('express').Router();
const { Heat, Product, ProductHeat, User } = require('../../models');

// The `/api/heats` endpoint

router.get('/', (req, res) => {
  // find all heats, including associated Product data

  Heat.findAll({
    include: [
      {
        model: Product,
        through: ProductHeat,
      },
    ],
  })
    .then((heats) => res.status(200).json(heats))
    .catch((err) => res.status(500).json(err))
});

router.get('/:id', (req, res) => {
  // find a single Heat by its `id`, including associated Product data
  Heat.findOne({
    where: { id: req.params.id },
    include: [{
      model: Product,
      attributes: ['id', 'product_name', 'product_desc', 'price', 'stock', 'image_link', 'user_id']
    }]
    })
  .then(dataC => {
    if (!dataC) {
      res.status(404).json({ message: 'No Heat for this ID'});
      return;
    }
    res.json(dataC);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});


router.post('/', (req, res) => {
  // create a new Heat
  Heat.create({
    heat_name: req.body.heat_name
  })
  .then (dataC => res.json(dataC))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a Heat name/details by its `id` value
  Heat.update(
    req.body, {
      where: { id: req.params.id }
    }
  )
  .then(dataC => {
    if (!dataC) {
      res.status(404).json({ message: 'No Heat for this ID'})
      return;
    }
    res.json(dataC)
    }
  )
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.delete('/:id', async (req, res) => {
  // delete a 'Heat' by its `id` value
  try {
    const heatData = await Heat.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!heatData) {
      res.status(404).json({ message: 'No Heat found with this id!' });
      return;
    }

    res.status(200).json(heatData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
