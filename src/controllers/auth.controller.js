// src/controllers/authController.js

const authService = require('../services/auth.service');

exports.signUp = async (req, res, next) => {
    try {
        const { userEmail, userPassword } = req.body;
        const responseBody = await authService.signUp(userEmail, userPassword);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error);
    }
};

exports.signIn = async (req, res, next) => {
    try {
        const { userEmail, userPassword } = req.body;
        const responseBody = await authService.signIn(userEmail, userPassword);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error);
    }
};
