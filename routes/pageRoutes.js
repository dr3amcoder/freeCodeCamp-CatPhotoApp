const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const path = require('path');
const catProfilesModel = require('../models/catProfilesModel');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/catPhotos', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'catPhotos.html'));
  });  

router.get('/catFacts', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'catFacts.html'));
});

router.get('/catFactsGenerator', async (req, res) => {
  try {
    console.log('🔍 Mongoose connection readyState for Cat Facts Generator:', mongoose.connection.readyState);

    // TODO: Refactor this code block below
    const CatFactsModel = require('../models/catFactsModel');
    const facts = await CatFactsModel.find();
    if (facts.length === 0) {
      return res.status(404).send('No cat facts available');
    }
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    res.json(randomFact);
  } catch (error) {
    console.error('Error fetching cat fact:', error);
    res.status(500).send('Error fetching cat fact');
  }
});

router.get('/catProfiles', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'catProfiles.html'));
});

router.post('/catForm', async (req, res) => {
  try {
    console.log('📦 Received body:', req.body);
    const { name, type, personalities, activity } = req.body;

    const newCatProfile = new catProfilesModel({
      name,
      type,
      personalities,
      activity
    });

    const savedCat = await newCatProfile.save();

    res.status(201).json(savedCat);

  } catch (error) {
    console.error('Error saving cat profile:', error);
    res.status(500).json({ error: 'Failed to save cat profile' });

  }
});

module.exports = router;