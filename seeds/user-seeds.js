//Require
const {User} = require('../models');

//Data
const userData = [
    {
        username: 'jessTest',
        email: 'jessTest@gmail.com',
        password: 'test1234'
    },
    {
        username: 'mayaTest',
        email: 'mayaTest@gmail.com',
        password: 'test5678'
    }, 
    {
        username: 'jonTest',
        email: 'jonTest@gmail.com',
        password: 'test0000'
    },
    {
        username: 'annatest',
        email: 'anna@gmail.com',
        password: '1234abcd'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

//Export Users
module.exports = seedUsers;