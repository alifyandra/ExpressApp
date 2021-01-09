"use strict";
module.exports = (sequelize, DataTypes) => {
    var Lead = sequelize.define("Lead", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allownull: false,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allownull: false,
        },
    });
    return Lead;
};
