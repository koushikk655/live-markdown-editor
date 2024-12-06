const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const marked = require('marked');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON request bodies

// Endpoint to process Markdown and return HTML
app.post('/convert-markdown', (req, res) => {
    const { markdown } = req.body;

    // Check if markdown content exists
    if (typeof markdown !== 'string') {
        return res.status(400).json({ error: 'Invalid markdown input' });
    }

    try {
        // Convert Markdown to HTML
        const html = marked(markdown);
        res.json({ html });
    } catch (error) {
        res.status(500).json({ error: 'Error processing Markdown' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Markdown conversion server is running on http://localhost:${PORT}`);
});
