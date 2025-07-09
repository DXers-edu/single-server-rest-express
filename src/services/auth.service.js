const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signUp = async (userEmail, userPassword) => {
    const exists = await User.findOne({ userEmail });
    if (exists) {
        const error = new Error({ code: 'DE', message: 'Duplicated Email.' });
        error.status = 400;
        throw error;
    }

    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS, 10);
    const hashedPassword = await bcrypt.hash(userPassword, saltRounds);

    const user = new User({ userEmail, userPassword: hashedPassword });
    await user.save();

    return { code: 'SU', message: 'Success.' };
};

exports.signIn = async (userEmail, userPassword) => {
  
    const user = await User.findOne({ userEmail });
    if (!user) {
        const error = new Error({ code: 'SF', message: 'Sign in Failed.' });
        error.status = 401;
        throw error;
    }

    const isMatch = await bcrypt.compare(userPassword, user.userPassword);
    if (!isMatch) {
        const error = new Error({ code: 'SF', message: 'Sign in Failed.' });
        error.status = 401;
        throw error;
    }

    const payload = { userEmail };
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return { code: 'SU', message: 'Success.', accessToken, expiration: 60 * 60 };
};