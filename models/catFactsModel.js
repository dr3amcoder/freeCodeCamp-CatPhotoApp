const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const catFactsSchema = new Schema({
  fact: {
    type: String,
    required: true
  }
});

const catFactsModel = model('CatFacts', catFactsSchema);

module.exports = catFactsModel;
