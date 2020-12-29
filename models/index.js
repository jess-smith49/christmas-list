const User = require('./User');
const List = require('./List');

//ASSOCIATIONS

List.belongsTo(User);

User.hasMany(List);

module.exports = {User, List};