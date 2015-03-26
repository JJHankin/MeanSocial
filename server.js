var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.get('/api/posts', function (req, res){

	res.json([
		{
			username: 'dickeyxxx',
			body: 'node rocks!'
		}
	]);
});

var Post = require('./models/post')
app.post('/api/posts', function (req, res, next) {
	var post = new Post({
		username: req.body.username,
		body: req.body.body
	});
	post.save(function (err, post) {
		if (err) { return next(err) }
		res.json(201, post)
	});
});

// app.post('/api/posts', function (req, res){
// 	console.log('post received!')
// 	console.log(req.body.username)
// 	console.log(req.body.body)
// 	res.send(201)
// });

app.listen(3000, function (){
	console.log('Server listening on', 3000)
})