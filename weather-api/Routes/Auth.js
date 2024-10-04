const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET_KEY = 'mysecretkey';

const userCredentials = {
    email: 'admin@admin.com',
    password: 'admin'
};

router.post('/', (req, res) => {
    const { email, password } = req.body;

    if (email === userCredentials.email && password === userCredentials.password) {
        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
