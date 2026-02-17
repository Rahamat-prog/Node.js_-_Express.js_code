const mongoose = require('mongoose');

const connectDB = async () => {
    // TODO: alternate this
    mongoose.connect(process.env.MONGO_URL)
    .then((conn) => {
        console.log(`MongoDB connection successful" ${conn.connection.host}`);
    })
    .catch((error) => {
        console.log("MongoDB connection failed", error);
        process.exit(1);
    })
}

module.exports = connectDB;


