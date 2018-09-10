var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    Book = require('./models/bookModel'),
    router = require('./Routes/bookRoutes.js')(Book);

var db;

if (process.env.ENV === 'Test') {
    db = mongoose.connect('mongodb://localhost:27017/bookAPI_test');
}
else {
    db = mongoose.connect('mongodb://localhost:27017/bookapi');
}

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json({ extended: true }));

app.use('/api/books', router);

app.get('/', function(req, res) {
    res.send('welcome to my api');
});

app.listen(port, function() {
    console.log('running on port: ' + port);
});

module.exports = app;