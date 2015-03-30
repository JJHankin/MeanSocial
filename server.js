var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')

// var Post = require('./controllers/api/posts')(app)


var app = express()

app.use(bodyParser.json())
app.use(require('./controllers/api/posts'));

// Delivers layout file

app.get('/', function (req, res) {
	res.sendfile('layouts/posts.html')
});

app.listen(3000, function () {
	console.log('Server listening on', 3000)
});