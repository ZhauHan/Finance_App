require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_URI);
        console.log('Connected to the database');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;