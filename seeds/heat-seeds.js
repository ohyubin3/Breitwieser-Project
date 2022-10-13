const { Heat } = require('../models');

const heatData = [
  {
    heat_name: 'Class C misdemeanor',
  },
  {
    heat_name: 'Class B misdemeanor',
  },
  {
    heat_name: 'Class A misdemeanor',
  },
  {
    heat_name: 'State jail felony',
  },
  {
    heat_name: 'Third-degree felony',
  },
  {
    heat_name: 'Second-degree felony',
  },
  {
    heat_name: 'First-degree felony',
  },
];

const seedHeats = () => Heat.bulkCreate(heatData);

module.exports = seedHeats;