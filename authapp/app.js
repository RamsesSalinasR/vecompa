const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to database
mongoose.connect(config.database);

// On connection
mongoose.connection.on('connected', () =>{
    console.log('connected to database ' + config.database);
});

// On error
mongoose.connection.on('error', (err) =>{
    console.log('Database Error ' + err);
});

const app = express();

const users = require('./routes/users');
//Port Number
const port = 3000;

//CORS MiddleWare
app.use(cors());

//Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Body Parser MiddleWare
app.use(bodyParser.json());

app.use('/users', users);

//Index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

//Start Server
app.listen(port, () => {
    console.log('server started on port '+port);
});
