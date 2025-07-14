const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Mongo db connected");
        app.listen(5000,() => console.log("Server running on port 5000"));
    })
    .catch(err => console.error(err));