const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes.js');

const express = require('express')
//const bodyParser = ('body-parser')


require('dotenv').config(); 

const app = express();
app.use(cors());
//app.use(bodyParser.json())
app.use(express.json());
app.use(routes)


async function connectToDb() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('DB connection established ;)');
        app.listen(process.env.PORT || 8000, function () {
            console.log(`Listening on port ${process.env.PORT || 8000}...`);
        });
    } catch (error) {
        console.log(error);
        console.log('Couldn\'t establish connection :(');
    }
}

connectToDb();

