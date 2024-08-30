const express = require('express');
const dotenv = require('dotenv');
const {MongoClinet} = require('mongodb');
const app = express();
const port = 5000

dotenv.config();
MongoClinet.connect(process.env.MONGO_URI, (err, client) => {   
    if (err) {
        console.error(err);
        return;
    }
    console.log('Connected to MongoDB');
    const db = client.db('test');
    const collection = db.collection('test');
    collection.insertOne({name: 'test'}, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Document inserted');
    });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

