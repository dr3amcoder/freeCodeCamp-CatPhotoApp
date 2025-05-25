const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const catProfileSchema = new Schema({
    name: String,
    type: String,
    personalities: [String],
    activity: String
});

const catProfilesModel = model('CatProfiles', catProfileSchema)

module.exports = catProfilesModel;