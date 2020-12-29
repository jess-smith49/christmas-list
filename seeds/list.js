const {List} = require('../models');

const clistData = [
    {
        list_name: 'jess',
        list_items: 'book',
        user_id: 1
    },
    {
        list_name: 'maya',
        list_items: 'earrings',
        user_id: 2
    },
    {
        list_name: 'jon',
        list_items: 'hats',
        user_id: 3
    },
    {
        list_name: 'anna',
        list_items: 'pants',
        user_id: 4
    }
];

const seedList = () => List.bulkCreate(clistData);

module.exports = seedList;