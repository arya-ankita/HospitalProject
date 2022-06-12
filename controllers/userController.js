const { Sequelize } = require('sequelize');
const { promisify } = require('util');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const db = require('./../models');
const jwt = require('jsonwebtoken');
const User = db.users;




