const { Sequelize, DataTypes } = require('sequelize');
const {database} = require("../connection/database"); // Import your Sequelize instance

const carousel = database.define('carousel',{
    product_categories:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    brand_name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    place:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    image_url:{
        type:DataTypes.STRING,
        allowNull:false
    }
}) 

module.exports = carousel;