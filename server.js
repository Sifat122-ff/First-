const express = require('express');
const axios = require('axios');
const app = express();

const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN';
const CHAT_ID = 'YOUR_CHAT_ID'; // You can use your own chat ID or any channel/group's chat ID

app.use(express.static('public')); // Serve your HTML file

app.get('/sendMessage', async (req, res) => {
    try {
        const message = 'Hello from your Telegram Web App!';
        const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text: message
        });
        res.json({ message: 'Message sent!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
