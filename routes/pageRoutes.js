const express = require('express');
const router = express.Router();
const path = require('path');
const CatFacts = require('../models/CatFacts');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/catPhotos', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'catPhotos.html'));
  });  

router.get('/catFacts', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'catFacts.html'));
});

router.get('/api/cat-fact', async (req, res) => {
  try {
    const facts = await CatFacts.find();
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    res.json(randomFact);
  } catch (error) {
    res.status(500).send('Error fetching cat fact');
  }
});

router.get('/catProfiles', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'catProfiles.html'));
});

module.exports = router;