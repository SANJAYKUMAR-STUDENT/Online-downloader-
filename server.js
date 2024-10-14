// server.js

require('dotenv').config();
const express = require('express');
const axios = require('axios');
const ytdl = require('ytdl-core');
const bodyParser = require('body-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// Rate limiting middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Route to handle YouTube downloads
app.post('/youtube-download', async (req, res) => {
    const { url } = req.body;
    if (!ytdl.validateURL(url)) {
        return res.status(400).send('Invalid YouTube URL');
    }
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(url, { quality: 'highest' }).pipe(res);
});

// Route for Instagram downloads (simplified)
app.post('/instagram-download', async (req, res) => {
    const { url } = req.body;
    try {
        const { data } = await axios.get(url);
        const mediaUrl = data.match(/"display_url":"([^"]+)"/)[1].replace(/\\u0026/g, '&');
        res.redirect(mediaUrl);
    } catch (error) {
        res.status(500).send('Failed to download Instagram media');
    }
});

// Route for Facebook (simplified example)
app.post('/facebook-download', async (req, res) => {
    const { url } = req.body;
    // Implement Facebook download logic using API
    res.status(501).send('Facebook download not implemented yet.');
});

// Route for Twitter (simplified example)
app.post('/twitter-download', async (req, res) => {
    const { url } = req.body;
    // Implement Twitter download logic using API
    res.status(501).send('Twitter download not implemented yet.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
