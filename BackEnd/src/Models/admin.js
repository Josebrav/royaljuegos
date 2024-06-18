const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('Admin', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        Usuarios: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        { timestamps: false });
};