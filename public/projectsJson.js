var projects = [
	{
		name: 'Fantasy Football Draft Kit',
		link: 'http://www.fantasydraftkit.org',
		img: 'images/fantasykit.jpg',
		description: {
			title: 'A fantasy football draft kit, designed with React and Material UI on the front-end, with Node and Cheerio on the back-end',
			paragraphs: [
				'This application scrapes the web using Cheerio and MySQL for fantasy football rankings and statistics.',
				'Organize players by a filter of your choice, compare rankings, favorite your picks, and have a clear representation of stats for every season of every player, giving users an all-in-one kit for their drafts'
			]
		},
		barsid: 'draft-bars'
	},
	{
		name: 'T-E-Pitch',
		link: 'http://www.tepitch.com',
		img: 'images/pitchdesk.jpg',
		description: {
			title: 'A real-time, multiplayer card game',
			paragraphs: [
				'Started as a front end, simple js logic game. Once I got the back end implemented with Node, the project really began to take off.',
				'Express and Socket.io together on the back end use websockets for a simplistic and smooth multiplayer engine, efficiently handling many games at once. While using jQuery and InteractJs for a modern, responsive, and up-to-date mobile friendly front end',
				'Hosted on Amazons\' Elastic Compute Cloud service, so fees are low and deploying updates is quick and easy'
			]
		},
		barsid: 'pitch-bars'
	},
	{
		name: 'This Site: My Portfolio',
		link: 'https://github.com/sshilal1/onlineResume',
		img: 'images/resumedesk.jpg',
		description: {
			title: 'Hosted on my very own Raspberry Pi microcomputer',
			paragraphs: [
				'I was not going to include this project for my site, but I felt it was important to promote my love for Raspberry Pi and microcomputers',
				'Initally planned to host on another AWS EC2 server, once I found out how easy it was to host on my Pi, I figured I\'d save the money and dedicate the Pi to a full time node server!',
				'I will have a blog post coming soon with more information on the process, so stay tuned!'
			]
		},
		barsid: 'resume-bars'
	},
];

/*

<div class="row even">	
		<div class="col-sm-12">
			<h2><a href="https://github.com/sshilal1/onlineResume">This Site: My Portfolio</a></h2>
		</div>
		<div class="col-sm-4" style="text-align: -webkit-center;">	
			<div style="max-width:350px;">
				<img class="project-img" src="images/resumedesk.jpg">
			</div>
		</div>
		<div class="col-sm-6">
			<h3>Hosted on my very own Raspberry Pi<a href="https://www.raspberrypi.org/"><img style="max-width:50px" src="images/raspi-sprite.png"></a> microcomputer</h3>
			<p>I was not going to include this project for my site, but I felt it was important to promote my love for Raspberry Pi and microcomputers</p>
			<p>Initally planned to host on another AWS EC2 server, once I found out how easy it was to host on my Pi, I figured I'd save the money and dedicate the Pi to a full time node server!</p>
			<p>I will have a blog post coming soon with more information on the process, so stay tuned!</p>
		</div>
		<div class="col-sm-2">
			<div id="resume-bars" class="column-sports"></div>
		</div>
	</div>

,
	{
		name: 'Fantasy Football Draft Kit',
		link: 'http://www.fantasydraftkit.org',
		img: 'images/fantasykit.jpg',
		description: {
			title: 'titleee',
			paragraphs: [
				'fgsdfgfdsg',
				'dfasdfdsaf'
			]
		},
		barsid: 'draft-bars'
	},*/