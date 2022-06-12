const { promisify } = require('util');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const db = require('./../models');
const jwt = require('jsonwebtoken');
const User = db.users;

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

// Register user 
exports.signUp = catchAsync(async (req, res) => {
    try {

        var data = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            role: req.body.role,
            password: req.body.password

        }
        const newUser = await User.create(data);

        const token = signToken(newUser._id);

        res.status(200).json({
            status: 'success',
            token,
            message: 'User registered succefully',
            data: newUser
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: err
        })

    }
})

exports.login = catchAsync(async (req, res, next) => {
    try {

        const { email, password } = req.body;
        console.log("===========", req.body);
        // if email and password actually exists
        if (!email || !password) {
            return next(new AppError('Please provide email and password', 400));
        }

        //Check if user exist
        const user = await User.findOne({ email });
        console.log("USER =========",user.password);
        if (!user || !(await user.correctPassword(password, user.password))) {
            return res.send('Incorrect email or password')
        }
        // if everything ok,send token to client
        const token = signToken(user._id);
        res.status(200).json({
            status: 'success',
            token,
            message: 'Login Successfull'
        });

    } catch (e) {
console.log("Error check =========",e);
        res.status(400).json({
            status: 'fail',
            message: 'Invalid User'
        })
    }
});


exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        // roles ['admin', 'lead-guide']. role='user'
        if (!roles.includes(req.user.role)) {
            return next(
                new AppError('You do not have permission to perform this action', 403)
            );
        }

        next();
    };
};