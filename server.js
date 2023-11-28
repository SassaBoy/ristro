const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images, etc.) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Handle requests for the root URL
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
