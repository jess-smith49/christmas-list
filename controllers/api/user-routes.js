const router = require('express').Router();

const {User} = require('../../models');
const { route } = require('./list-routes');


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


//LOGIN
router.post('/login', (req, res) => {
    console.log(req.body, "===============");
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that username found.'});
            return;
        }
        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!'});
            return;
        }
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in.'});
        });
    });
});

//LOGOUT
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});



module.exports = router;