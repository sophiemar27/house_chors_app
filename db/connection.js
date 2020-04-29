const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/chores-app";

mongoose.connect(connectionString)
    .then(() => {
        console.log('Connected to mongo successesfully')
    })
    .catch((err) => {
        console.log('Failed to connect to mongodb')
    })

    module.exports = mongoose