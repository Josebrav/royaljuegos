const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        nickname: {
            type: DataTypes.STRING(30), 
             allowNull: true,
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
        }
   },

        { timestamps: false });

    // User.associate = (models) => {
        
    //     User.hasMany(models.Review, { foreignKey: 'userId' }),
    //     User.hasMany(models.Trip, { foreignKey: 'userId' })
    // }; 
    //  return User //relacion con avatar
    }
