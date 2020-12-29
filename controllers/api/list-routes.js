const router = require('express').Router();

const {List} = require('../../models');

//GET ALL LISTS
router.get('/', (req, res) => {
    List.findAll({

    })
    .then(dbListData => res.json(dbListData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//CREATE NEW LIST
router.post('/', (req, res) => {
    List.create({
        list_name: req.body.list_name,
        list_items: req.body.list_items,
        user_id: req.body.user_id
    })
    .then(dbListData => {
        res.json(dbListData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;