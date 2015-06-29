
var bio = {
	"name" : "Rath Panyowat",
	"role" : "Front-end Web Developer",
	"contacts" : {
		"mobile" : "+6689-422-5559",
		"email" : "rathjungzz@hotmail.com",
		"twitter" : "@rathjung",
		"github" : "rathjung",
		"blog" : "rath.asia",
		"location" : "Bangkok, Thailand"
	},
	"bioPic" : "images/avatar.jpg",
	"welcomeMsg" : "Hi, Welcome to my portfolio.",
	"skills" : ["awesomeness","JavaScript","HTML","CSS"]
}

var projects = {
	"projects" : [
		{
			"title" : "Iamdr",
			"dates" : "2014",
			"description" : "A portal for medical intern",
			"images" : ["images/iamdrnet-01.jpg","images/iamdrnet-02.jpg"]
		},
		{
			"title" : "drjob",
			"dates" : "2015",
			"description" : "A job portal for doctor",
			"images" : ["images/drjob-port.jpg"]
		}
	],
	"display" : function () {
		$("#projects").append(HTMLprojectStart);

		for(i in projects.projects) {
			var	formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title),
				formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates),
				formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description),
				formattedprojectImage = "";

			for (j in projects.projects[i].images) {
				formattedprojectImage += HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
			}

			var formattedproject = formattedprojectTitle + formattedprojectDates + formattedprojectDescription + formattedprojectImage;
			$(".project-entry").append(formattedproject);
		}
	}
}


var work = {
	"jobs" : [
		{
			"employer" : "Fang Hospital",
			"title" : "General Practitioner",
			"dates" : "2011",
			"location" : "Chiang Mai, Thailand",
			"description" : "Provide a medical services to patients around Fang District."
		},
		{
			"employer" : "Ramathibodi Hospital",
			"title" : "Medical System Officer",
			"dates" : "2012",
			"location" : "Bangkok, Thailand",
			"description" : "Help implementing HIS."
		}
	]
}

var education = {
	"schools" : [
		{
			"name" : "Faculty of Medicine, Khon Kaen University",
			"degree" : "Doctor of Medicine",
			"dates" : "2011",
			"location" : "Khon Kaen, Thailand",
			"major" : ["medicine"],
			"url" : "test"
		},
		{
			"name" : "Demonstration School, Khon Kaen University",
			"degree" : "Secondary School",
			"dates" : "2006",
			"location" : "Khon Kaen, Thailand",
			"major" : ["none"],
			"url" : "test"
		}
	],
	"onlineCourses" : {
		"title" : "Test",
		"school" : "Test",
		"dates" : "test",
		"url" : "url"
	}
}

var formattedName = HTMLheaderName.replace("%data%", bio.name),
	formattedheaderRole = HTMLheaderRole.replace("%data%", bio.role),
	formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
	formattedemail = HTMLemail.replace("%data%", bio.contacts.email),
	formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
	formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github),
	formattedblog = HTMLblog.replace("%data%", bio.contacts.blog),
	formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location),
	formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic),
	formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);


$("#header").prepend(formattedName + formattedheaderRole);
$("#topContacts").append(formattedmobile + formattedemail + formattedtwitter + formattedgithub + formattedblog + formattedlocation);
$("#header").append(formattedbioPic + formattedwelcomeMsg);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkills = "";
	for (i = 0; i < bio.skills.length ; i += 1) {
		formattedSkills += HTMLskills.replace("%data%", bio.skills[i]);
	}
	$("#skills").append(formattedSkills);
}

for (i in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer),
		formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title),
		formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates),
		formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location),
		formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
	var formattedInfo = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
	$(".work-entry:last").append(formattedInfo);
}

$("#main").append(internationalizeButton);
function inName(name) {
	if (!name) {
		name = bio.name;
	}
	var split = "",
		firstName = "",
		lastName = "",
		fullName = "";
	split = name.trim().split(" ");
	firstName = split[0].slice(0,1).toUpperCase() + split[0].slice(1).toLowerCase();
	lastName = split[1].toUpperCase();
	fullName = firstName + " " + lastName;
	return fullName;
}

projects.display();

$("#mapDiv").append(googleMap);

