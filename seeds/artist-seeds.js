const { Artist } = require('../models');

const artistData = [
  {
    artist_name: 'Vincent van Gogh',
  },
  {
    artist_name: 'Gustav Klimt',
  },
  {
    artist_name: 'Johannes Vermeer',
  },
  {
    artist_name: 'Leonardo Da Vinci',
  },
];

const seedArtists = () => Artist.bulkCreate(artistData);

module.exports = seedArtists;
