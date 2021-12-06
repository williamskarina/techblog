const { User } = require('../models');

const userData = [
  {
    username: "Mikayla",
    email: "mik234@gmail.com",
    password: "password1234"
  },
  {
    username: "David",
    email: "davidh@gmail.com",
    password: "password1234"
  },
  {
    username: "Riley",
    email: "rryland09@gmail.com",
    password: "password1234"
  },
  {
    username: "Rafael",
    email: "rtinco@gmail.com",
    password: "password1234"
  },
  {
    username: "Sherry",
    email: "sherryw@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;