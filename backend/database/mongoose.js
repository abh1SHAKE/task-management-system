const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, {
    dbName: "todolist"
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Error: cannot connect to database"+error);
});

module.exports = {mongoose};