const router = require('express').Router();
const { Artist, Product } = require('../../models');

// The `/api/artists` endpoint

router.get("/", async (req, res) => {
  // Get all Artists, including associated Products
  try {
    const artistData = await Artist.findAll({
      include: [ 
        { model: Product,
        attributes: ['id', 'product_name', 'product_desc', 'price', 'stock', 'image_link']}
      ]
    });

    res.status(200).json(artistData);
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // Get one Artist by its `id` value, including associated Products
  Artist.findOne({
    where: { id: req.params.id },
    include: [{
      model: Product,
      attributes: ['id', 'product_name', 'product_desc','price', 'stock', 'image_link']
    }]
    })
  .then(dataC => {
    if (!dataC) {
      res.status(404).json({ message: 'No Artist for this ID'});
      return;
    }
    res.json(dataC);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.post("/", (req, res) => {
  // create a new Artist
  Artist.create({
    artist_name: req.body.artist_name
  })
  .then (dataC => res.json(dataC))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update an Artist by its `id` value
  Artist.update(
    req.body, {
      where: { id: req.params.id }
    }
  )
  .then(dataC => {
    if (!dataC) {
      res.status(404).json({ message: 'No Artist for this ID'})
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

// DELETE an Artist

router.delete('/:id', async (req, res) => {
  try {
    const artistData = await Artist.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!artistData) {
      res.status(404).json({ message: 'No Artist found with this id!' });
      return;
    }

    res.status(200).json(artistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;