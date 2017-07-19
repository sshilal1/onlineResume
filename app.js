var express = require('express');
var app = express();
var http = require('http').Server(app);

/*
app.use(express.static("public", {
    extensions: ['html', 'htm'],
}));
*/

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.sendFile('index.html', { root : __dirname });
})

app.get('/projects', function (req, res) {
	res.sendFile('public/projects.html', { root : __dirname });
})

app.get('/about', function (req, res) {
	res.sendFile('public/about.html', { root : __dirname });
})

app.get('/blog', function (req, res) {
	
	res.sendFile('public/blog.html', { root : __dirname });
	
	var wordpress = require( "wordpress" );
	var client = wordpress.createClient({
		url: "https://stephenshilale.wordpress.com/",
		username: "***",
		password: "***"
	});

	client.getPosts(function( error, posts ) {
		console.log( "Found " + posts.length + " posts!" );
		for (post of posts) {
			if (post.status == "publish") {
				console.log (post.title);
				/*post.
					content, date, modified, link
				*/
			}
		}
	});
})

http.listen(3000, function(){
	console.log('listening on *:3000');
});