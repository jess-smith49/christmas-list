const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./controllers/api');


const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


//MIDDLEWARE
app.use('/api', apiRoutes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + '/public')));

/*app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });*/

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});