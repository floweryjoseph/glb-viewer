
const mongoose = require('mongoose');
const Model = require('../models/glb-models.js');

// Upload a new 3D model
exports.uploadModel = (req, res) => {
    const newModel = new Model({
        name: req.body.name,
        fileUrl: req.file.filename,
    });

    newModel.save()
        .then(model => res.json(model))
        .catch(err => res.status(500).json({ error: err.message }));
};

// Get all 3D models
exports.getModels = (req, res) => {
    Model.find()
        .then(models => res.json(models))
        .catch(err => res.status(500).json({ error: err.message }));
};

