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
	
	var wordpress = require( "wordpress" );
	var client = wordpress.createClient({
		url: "https://stephenshilale.wordpress.com/",
		username: "***",
		password: "***"
	});

	client.getPosts(function( error, posts ) {
		console.log( "Found " + posts.length + " posts!" );
		var blogPostsHtmlString = "";
		for (post of posts) {
			if (post.status == "publish") {
				console.log (post.title);
				/*post.
					content, date, modified, link
				*/
				// Here we want to create the article html string
				blogPostsHtmlString += post.title; //createArticle(post);
			}
		}
		
		var fs = require('fs');
		
		fs.readFile('public/blog.html', 'utf8', function (err,data) {
			if (err) {
				return console.log(err);
			}
			
			var result = data.replace('<!--%articles%-->', blogPostsHtmlString);

			fs.writeFile('public/blog.html', result, 'utf8', function (err) {
				if (err) return console.log(err);
				else res.sendFile('public/blog.html', { root : __dirname });
			});
		});
	});
})

http.listen(3000, function(){
	console.log('listening on *:3000');
});