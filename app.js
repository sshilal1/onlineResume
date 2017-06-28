var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static("public", {
    extensions: ['html', 'htm'],
}));

var wordpress = require( "wordpress" );
var client = wordpress.createClient({
	url: "https://stephenshilale.wordpress.com/",
	username: "sshilal1",
	password: "FILL THIS IN"
});

client.getPosts(function( error, posts ) {
	console.log( "Found " + posts.length + " posts!" );
	for (post of posts) {
		console.log (post.title);
	}
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});