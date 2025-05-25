const express = require('express');
const mongoose = require('mongoose');
const seedCatFacts = require('./seed/seedCatFacts');
const pageRoutes = require('./routes/pageRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

const mongoURI = process.env.MONGO_URI;

mongoose.connection.on('connected', () => {
  console.log('✅ [Mongoose] Connection event: connected');
});

mongoose.connection.on('error', err => {
  console.error('❌ [Mongoose] Connection error event:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('🔌 [Mongoose] Connection event: disconnected');
});

const startServer = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('🌐 Connected to MongoDB with mongoose.connect');

    if (process.env.SEED_DB === 'true') {
      await seedCatFacts();
    }

    app.use(express.static('public'));
    app.use('/', pageRoutes);

    app.listen(5500, () => {
      console.log('🚀 Server running at http://localhost:5500');
    });

  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err);
    process.exit(1);
  }
};

startServer();