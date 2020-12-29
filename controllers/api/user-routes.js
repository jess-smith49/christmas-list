const router = require('express').Router();

const {User} = require('../../models');


//FIND ALL USERS
router.get('/', (req, res) => {
    User.findAll({
        attributes: {exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//FIND ONE USER BY ID
router.get('/:id', (req, res) => {
    User.findOne(
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbUserData => {
        if (!dbUserData){
            res.status(404).json({message: 'No user found with this username'})
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


//FIND ONE USER BY USERNAME
router.get('/:username', (req, res) => {
    User.findOne(
        {
            where: {
                username: req.params.username
            }
        }
    )
    .then(dbUserData => {
        if(!dbUserData){
            res.status(404).json({message: 'No user found with this username'})
        }
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
});

module.exports = router;