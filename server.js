const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/users/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const response = await axios.get(
            `https://discord.com/api/v10/users/${userId}`,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bot ${process.env.TOKEN}`,
                },
            },
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Proxy server is running on http://localhost:${port}`);
});
