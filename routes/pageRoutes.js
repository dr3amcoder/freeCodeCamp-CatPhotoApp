const express = require('express');
const router = express.Router();
const path = require('path');
const catFactsModel = require('../models/catFactsModel');

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
    const facts = await catFactsModel.find();
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

module.exports = router;