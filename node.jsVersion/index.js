// Imports required modules
const express = require('express');
const axios = require('axios');
const path = require('path');

// Create an Express app
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route to fetch and return Rick and Morty characters
app.get('/characters', async (req, res) => {
  try {
    // Make a GET request to the Rick and Morty API
    const response = await axios.get('https://rickandmortyapi.com/api/character');

    // Return the character data as JSON response
    res.json(response.data.results);
  } catch (error) {
    console.error(error);
    // Handle any errors and return a 500 status with an error message
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    const characters = response.data.results;
    res.render('index', { characters });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
