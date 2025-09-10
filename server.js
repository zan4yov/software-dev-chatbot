// server.js
require('dotenv').config(); // baca file .env

const express = require('express');
const { OpenAIAPI } = require('./openai');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // supaya index.html & assets bisa diakses

// Endpoint untuk chatbot
app.post('/chat', async (req, res) => {
    try {
        const { message, history } = req.body;
        const response = await OpenAIAPI.generateResponse(message, history || []);
        res.json({ reply: response });
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
    console.log('🔑 API Key loaded?', process.env.OPENAI_API_KEY ? 'Yes' : 'No');
});
