var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

//Require the Router we defined in movies.js
var upper = require('./upper.js');
var lower = require('./lower.js');

//Use the Router on the sub route /movies
app.use('/upper', upper);
app.use('/lower', lower);

app.listen(3000);