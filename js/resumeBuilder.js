var skills = ["awesomeness","programming","teaching"];

var bio = {
	"name": "Stephen Shilale",
	"role": "Front End Designer",
	"contacts": {
		"phone": "845-323-2776",
		"email": "sshilal1@binghamton.edu",
		"github": "sshilal1",
		"location": "New City, NY"
	},
	"welcomeMessage": "This is my page!",
	"skills": [
		"awesomeness","programming","teaching"
	],
	"biopic": "images/fry.jpg"
}

var education = {
	"schools": [
		{
			"name": "Binghamton University",
			"location": "Binghamton, NY",
			"degree": "Bachelors of Science",
			"major": "Computer Engineering",
			"dates": 2015,
			"url": "http://binghamton.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com/course/ud804"
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "Crestron Electronics",
			"title": "Firmware Engineer",
			"location": "Rockleigh, NJ",
			"dates": "Summer 2014 - Present",
			"description": "Developed and maintain a nightly test system containing hundreds of Digital Media units. Write programs running on control systems that communincate with Crestron products."
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
		},
		{
			"employer": "Lourdes Hospital",
			"title": "IT Support Intern",
			"dates": "Fall 2013",
			"description": "Assisted doctors and other medical experts with computerized physician order entry"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Solar Energy Generation Dashboard",
			"dates": "2015",
			"description": "Designed and built a touch screen dashboard displaying relevant solar information from the engineering building’s solar panel array on the roof."
		},
		{
			"title": "FPGA Basys Board Interface",
			"dates": "2014",
			"description": "Created a robot based on an FPGA microcontroller and used motors, light snesors, and IR communication to demonstrate different functions"			
		}
	]
}

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.phone));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}

function displayWork() {

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
displayWork();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		/* When adding images, PUT HERE
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}*/
	}
}
projects.display();

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
$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

