const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
    name: String,
    fileUrl: String,
});

module.exports = mongoose.model('Model', ModelSchema);

