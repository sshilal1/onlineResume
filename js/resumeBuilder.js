var skills = ["awesomeness","programming","teaching"];

var bio = {
	"name": "Stephen Shilale",
	"role": "Front End Designer",
	"contacts": {
		"phone": "845-323-2776",
		"email": "sshilal1@binghamton.edu",
		"github": "sshilal1",
		"linkedin": "https://www.linkedin.com/in/stephen-shilale-10237169",
		"location": "New City, NY"
	},
	"welcomeMessage": "I am a hard-working, motivated individual with a vast knowledge of technology looking to apply creativity to critical tech problems",
	"skills": [
		"C","C#","Javascript","VisualBasic","Powershell","HTML/CSS","LabView","UNIX/Linux based systems"
	],
	"biopic": "images/shil.jpg"
}

var education = {
	"schools": [
		{
			"name": "Binghamton University",
			"location": "Binghamton, NY",
			"degree": "Bachelors of Science",
			"major": ["Computer Engineering"],
			"dates": "2015",
			"url": "http://binghamton.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Development",
			"school": "Udacity",
			"dates": "2015-2016",
			"url": "http://www.udacity.com/"
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "Crestron Electronics",
			"title": "Firmware Engineer",
			"location": "Rockleigh, NJ",
			"dates": "2014 - Present",
			"description": "Developed and maintain a nightly test system containing hundreds of Digital Media units. Write programs running on control systems that communincate with Crestron products.",
			"images": "img.jpg"
		},
		{
			"employer": "EduTek Limited",
			"title": "Audio/Video Systems Intern",
			"location": "mamaroneck, NY",
			"dates": "Summer 2013",
			"description": "Designed systems of various devices to be integrated into schools, homes, and other residential and commerical buildings."
		},
		{
			"employer": "Michael Shilale Architects LLP.",
			"title": "Digital Archiving Administrator",
			"dates": "2011 - 2014",
			"description": "Coordinated the mass digitization of the companies private and personal files into secure folders and managed the interaction between the company and DocuFree, an iron mountain style company"
		}]
}

var projects = {
	"projects": [
		{
			"title": "T-E-Pitch Card Game",
			"dates": "2016-2017",
			"description": "Designed an online card game called Pitch",
			"sub-description" : "Pitch is an interactive card game I created with Javascript, HTML5/CSS3, and SQL",
			"images": "",
			"url": "www.tepitch.com"
		},
		{
			"title": "HTML resume",
			"dates": "2015",
			"description": "Created an online version of my resume, to be hosted soon",
			"images": ""
		},
		{
			"title": "Solar Energy Generation Dashboard",
			"dates": "2015",
			"description": "Designed and a touch screen dashboard displaying relevant solar information from the engineering building’s solar panel array on the roof.",
			"images": ""
		}
	]
}

bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.phone));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
	
		for (skill in bio.skills) {
		
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}

work.display = function() {

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
		
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
		
	}
}

bio.display();
work.display();
projects.display();
education.display();

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

