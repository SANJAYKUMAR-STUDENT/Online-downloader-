const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML pages for each social media platform
app.get('/youtube', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'youtube.html'));
});

app.get('/instagram', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'instagram.html'));
});

app.get('/facebook', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'facebook.html'));
});

app.get('/twitter', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'twitter.html'));
});

// Logging middleware (optional)
app.use((req, res, next) => {
    const logMessage = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
    fs.appendFileSync('logs/app.log', logMessage);
    next();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
