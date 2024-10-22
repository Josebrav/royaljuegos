const { DataTypes } = require('sequelize');

module.exports = (sequelize)  => {
     sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        nickname: {
            type: DataTypes.STRING(30), 
             allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
             allowNull: false,
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false, 
        },
        avatar:{
            type: DataTypes.STRING,
            allowNull: true
        },
        banned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        inactive: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true
        },
        chips:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
   },

        { timestamps: false });

    // User.associate = (models) => {
        
    //     User.hasMany(models.Review, { foreignKey: 'userId' }),
    //     User.hasMany(models.Trip, { foreignKey: 'userId' })
    // }; 
    //  return User //relacion con avatar
    }
