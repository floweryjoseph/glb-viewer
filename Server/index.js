const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const modelRoutes = require('./routes/modelRoutes');
const path = require('path');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());



mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use('/api/models', modelRoutes);
app.use('/files', express.static("files"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
