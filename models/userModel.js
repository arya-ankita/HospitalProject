const DataTypes = require('sequelize');
const { sequelize } = require('..');
const crypto = require('crypto');
const validator = require('validator');
const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: "id"
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            comment: null,
            field: "name"
        },
        email: {
            type: DataTypes.STRING(20000),
            allowNull: false,
            validate: {
                isEmail: true
            },
            unique: true,
            comment: null,
            field: "email"
        },
        phone: {
            type: DataTypes.STRING(10),
            allowNull: false,
            length: 10,
            unique: true,
            comment: null,
            field: "phone"
        },
        role: {
            type: DataTypes.ENUM('user', 'admin', 'subadmin'),
            defaultValue: "user",
            comment: null,
            field: "role"
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false,
            set(value) {
                const hash = bcrypt.hashSync(value, 10);
                this.setDataValue('password', hash);
            },
            validate: {
                notNull: {
                    msg: 'password is must'
                },
                notEmpty: {
                    msg: 'Please provide a password'
                },
                // len: {
                //     args: [8, 20],
                //     msg: 'The password should be between 8 and 20 characters'
                // }
            },
            comment: null,
            field: "password"
        }
    });
    User.prototype.correctPassword = async function (candidatePassword, userPassword) {
        return await bcrypt.compare(candidatePassword, userPassword);
    }
    return User;
}