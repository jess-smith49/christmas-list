//Requirements
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


//Create User Model
class List extends Model {}

List.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        list_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        list_items: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'list'
    }
);

module.exports = List;