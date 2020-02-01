const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors  = require('cors');
require('dotenv/config');

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');

app.use('/posts', postsRoute);
app.use('/users', usersRoute);

//db connection
mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log('connected to DB!')
    });


//ROUTES
app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000/users");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send('we are on \'\/\' ');
});

// Listening the server
app.listen(4000, () => {
    console.log('API has started')
});

//CORS configuring


