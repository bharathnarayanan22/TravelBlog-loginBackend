// routes.js
const express = require('express');
const signupModel = require('./models/signup.js');


const router = express.Router();

router.post('/SignUpPage', async (request, response) => {
    try {
        console.log(request.body);
        const signup = await signupModel.create({
            "Username": request.body.username,
            'Email': request.body.email,
            "Password": request.body.password,
            "confirmPassword": request.body.confirmPassword,
        });
        console.log('User signed up:', signup);
        response.json(signup);
    } catch (error) {
        console.error('Sign-up failed:', error);
        response.status(500).json({ error: 'Sign-up failed' });
    }
});

router.post('/LoginPage', async (request, response) => {
    const { email, password } = request.body;
    try {
        const user = await signupModel.findOne({ Email: { $regex: new RegExp(email, 'i') } });

        if (user) {
            if (user.Password === password) {
                response.json({ message: 'Success..!', user });
            } else {
                response.json('The password is incorrect');
            }
        } else {
            response.json('No user exists ..');
        }
    } catch (error) {
        console.error('Error in /LoginPage route:', error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
