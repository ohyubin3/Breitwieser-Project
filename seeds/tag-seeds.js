const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Class C misdemeanor',
  },
  {
    tag_name: 'Class B misdemeanor',
  },
  {
    tag_name: 'Class A misdemeanor',
  },
  {
    tag_name: 'State jail felony',
  },
  {
    tag_name: 'Third-degree felony',
  },
  {
    tag_name: 'Second-degree felony',
  },
  {
    tag_name: 'First-degree felony',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
