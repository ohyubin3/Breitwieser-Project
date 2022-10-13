const { Project } = require('../models');

const projectData = [
    {
        "name": "Concert Notifications App",
        "description": "A mobile app that will send you notifications whenever a concert is playing in your area.",
        "date_created": 20220101,
        "needed_funding": 5000,
        "user_id": "1"
      },
      {
        "name": "10 Daily Questions",
        "description": "A web app that will give users 10 new technical questions each day and track their progress in things like programming, cybersecurity, database architecture, and more!",
        "date_created": 20220202,
        "needed_funding": 10000,
        "user_id": "2"
      },
      {
        "name": "Moving Balls App",
        "description": "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes.",
        "date_created": 20220606,
        "needed_funding": 800,
        "user_id": "3"
      }
];

const seedProject = () => Project.bulkCreate(projectData);

module.exports = seedProject;