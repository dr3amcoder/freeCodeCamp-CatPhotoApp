const express = require('express');
const path = require('path');

const app = express();

// Serve static files from 'public' folder (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML files from 'views' folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.get('/catFacts', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'catFacts.html'));
});

app.get('/catPhotos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'catPhotos.html'));
});

app.get('/catProfiles', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'catProfiles.html'));
});

// Start the server
app.listen(5500, () => {
  console.log('Server running on http://localhost:5500/ ');
});
