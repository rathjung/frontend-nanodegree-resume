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
	"biopic" : "images/avatar.jpg",
	"welcomeMessage" : "Hi, Welcome to my resume. This is my second project for Udacity fronend developer nanodegree course. I'm a doctor in Thailand who want to learn to code.",
	"skills" : ["Design","JavaScript","HTML","CSS"],
	"display" : function(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name),
			formattedheaderRole = HTMLheaderRole.replace("%data%", bio.role),
			formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
			formattedemail = HTMLemail.replace("%data%", bio.contacts.email),
			formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
			formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github),
			formattedblog = HTMLblog.replace("%data%", bio.contacts.blog),
			formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location),
			formattedContacts = formattedmobile + formattedemail + formattedtwitter + formattedgithub + formattedblog + formattedlocation;
			formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic),
			formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage),
			formattedSkills = "";

		$("#header").prepend(formattedName + formattedheaderRole);
		$("#topContacts").append(formattedContacts);
		$("#footerContacts").append(formattedContacts);
		$("#header").append(formattedbioPic + formattedwelcomeMsg);

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (skill in bio.skills) {
				formattedSkills += HTMLskills.replace("%data%", bio.skills[skill]);
			}
			$("#skills").append(formattedSkills);
		}
	}
};

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
	"onlineCourses" : [
		{
			"title" : "I never educated in any online course",
			"school" : "But the project want me to include some.",
			"dates" : "2015",
			"url" : "http://udacity.com"
		}
	],
	"display" : function(){
		$("#education").append(HTMLschoolStart);
		for(school in education.schools) {
			var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name),
				formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree),
				formattedschoolDates =HTMLschoolDates.replace("%data%", education.schools[school].dates),
				formattedschoolLocation =HTMLschoolLocation.replace("%data%", education.schools[school].location),
				formattedschoolMajor = "";

			for (major in education.schools[school].major) {
				formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[major]);
			};

			var formattedEducation = formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolLocation + formattedschoolMajor;
			$(".education-entry").append(formattedEducation);
		}

		for(course in education.onlineCourses) {
			var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title),
				formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school),
				formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates),
				formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url),
				formattedonlineCourses = HTMLonlineClasses + formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL;

			$(".education-entry").append(formattedonlineCourses);
		}
	}
};

var work = {
	"jobs" : [
		{
			"employer" : "Iamdr Co., Ltd",
			"title" : "Co-founder",
			"dates" : "2014",
			"location" : "Bangkok, Thailand",
			"description" : "Iamdr is a healthtech startup company aimed to improve healthcare with technology and creativity."
		},
		{
			"employer" : "Ramathibodi Hospital",
			"title" : "Medical System Officer",
			"dates" : "2012",
			"location" : "Bangkok, Thailand",
			"description" : "Help implementing HIS."
		},
		{
			"employer" : "Fang Hospital",
			"title" : "General Practitioner",
			"dates" : "2011",
			"location" : "Chiang Mai, Thailand",
			"description" : "Provide a medical services to patients around Fang District, Chiang Mai, Thailand."
		}
	],
	"display" : function(){
		$("#workExperience").append(HTMLworkStart);
		for (job in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
				formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title),
				formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates),
				formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location),
				formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			var formattedWork = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
			$(".work-entry").append(formattedWork);
		}
	}
};

var projects = {
	"projects" : [
		{

			"title" : "iamdr.co company website",
			"dates" : "2014",
			"description" : "This is our company website. In case you interested in my recent works. Although I didn't upload some latest projects yet.",
			"images" : ["images/project03-01.jpg","images/project03-02.jpg"]
		},
		{
			"title" : "drjob.in.th and nursejob.in.th",
			"dates" : "2015",
			"description" : "A job portal for doctors and nurses. In Thailand, doctor job finding is mainly by connection. There's only one website with quite old UI and system (maybe it's like craiglist, very old design but have benefit to user). It's very hard to find specific job in that website because it's just a plain webboard with limited functionality. So we decided to build the new one. In this project, I'm a designer and front-end web developer. It's also responsive website.",
			"images" : ["images/project02-01.jpg","images/project02-02.jpg","images/project02-03.jpg"]
		},
		{
			"title" : "iamdr.net",
			"dates" : "2014",
			"description" : "A portal for medical intern. In Thailand, when people graduated from faculty of medicine of government's university. They have to work in government's hospital for 3 years. Iamdr.net is a site with information about working conditions in each hospital. In this project, that time I didn't have much coding skills. So I just designed a website and outsource coding to other people.",
			"images" : ["images/project01-01.jpg","images/project01-02.jpg","images/project01-03.jpg"]
		}
	],
	"display" : function () {
		$("#projects").append(HTMLprojectStart);
		for(project in projects.projects) {
			var	formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title),
				formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates),
				formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description),
				formattedprojectImage = "";

			for (image in projects.projects[project].images) {
				formattedprojectImage += HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			}

			var formattedproject = formattedprojectTitle + formattedprojectDates + formattedprojectDescription + formattedprojectImage;
			$(".project-entry").append(formattedproject);
		}
	}
};

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

$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();

