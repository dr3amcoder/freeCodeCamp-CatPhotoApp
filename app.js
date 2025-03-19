const express = require('express');
const app = express();
const pageRoutes = require('./routes/pageRoutes')
const mongoose = require('mongoose');
const seedCatFacts = require('./seed/seedCatFacts');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/catphotoapp';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);  // Stop the server if MongoDB connection fails
  });


// Optionally, run the seeding functionality
if (process.env.SEED_DB === 'true') {
  seedCatFacts();
}


// Instruction to retrieve routes
app.use('/', pageRoutes);


// Start the server
app.listen(5500, () => {
  console.log('Server running on http://localhost:5500/ ');
});
