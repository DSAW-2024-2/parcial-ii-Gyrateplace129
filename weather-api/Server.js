// server.js
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const weatherRoutes = require('./routes/weather');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/login', authRoutes);
app.use('/weather', weatherRoutes);

app.use((req, res) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
