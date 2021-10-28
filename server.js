const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors")

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({
        "welcome" : "This is the Honors Carolina Resume App backend ExpressJS API. From here you can CRUD resumes stored in MongoDB."
    });
});

require('./app/routes/template.routes.js')(app);

app.enable('trust proxy');

// listen for requests
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});