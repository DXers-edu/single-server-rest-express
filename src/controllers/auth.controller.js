// src/controllers/authController.js

const authService = require('../services/auth.service');

exports.signUp = async (req, res, next) => {
    try {
        const { userEmail, userPassword } = req.body;
        await authService.signUp(userEmail, userPassword);
        res.status(201).json({  });
    } catch (error) {
        next(error);
    }
};

exports.signIn = async (req, res, next) => {
    try {
        const { userEmail, userPassword } = req.body;
        const { status, body } = await authService.signIn(userEmail, userPassword);
        res.status(status).json(body);
    } catch (error) {
        next(error);
    }
};
