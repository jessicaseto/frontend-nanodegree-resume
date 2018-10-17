/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Model - bio
const bio = {
    name: 'Jessica Seto',
    role: 'Front End Software Engineer in Training',
    contacts: {
        email: '<email>@gmail.com',
        github: 'jessicaseto',
        linkedin: '/in/jessicaseto',
        location: 'Seattle, WA'
    },
    welcomeMessage: `Hi there, I'm Jessica!`,
    skills: ['Engineering', 'Photoshop', 'Illustrator'],
    biopic: 'images/fry.jpg',
};

// Model - education
const education = {
    schools: [{
        name: 'University of British Columbia',
        location: 'Vancouver, BC, Canada',
        degree: 'Bachelor of Applied Science',
        majors: ['Electrical Engineering, Minor in Commerce'],
        dates: 'Sep, 2010 - May, 2015',
    }],
    onlineCourses: [{
        title: 'Front End Web Developer Nanodegree',
        school: 'Udacity',
        dates: 'May, 2018 - Dec, 2018',
        url: 'https://udacity.com',
    }]
};

// Model - work
const work = {
    jobs: [{
        employer: 'Arista Networks',
        title: 'Hardware Engineer',
        location: 'Santa Clara, CA',
        dates: 'Jun, 2015 - Jul, 2018',
        description: 'Board level hardware experience'
    }, {
        employer: 'Nokia Networks',
        title: 'Hardware Engineering Intern',
        location: 'Mountain View, CA',
        dates: 'Jan, 2014 - Aug, 2014',
        description: 'Board level hardware experience'
    }, {
        employer: 'Nokia Networks',
        title: 'Hardware Engineering Intern',
        location: 'Ottawa, ON, Canada',
        dates: 'May, 2013 - Aug, 2013',
        description: 'Board level hardware experience'
    }, {
        employer: 'Ballard Power Systems',
        title: 'Co-op Student, Modeling Team',
        location: 'Vancouver, BC, Canada',
        dates: 'Sep, 2012 - Dec, 2012',
        description: 'Fuel cell testing, VBA for Excel data analysis'
    }, {
        employer: 'GF Strong Rehabilitation Centre',
        title: 'R&D Hardware Co-op Student',
        location: 'Vancouver, BC, Canada',
        dates: 'May, 2012 - Aug, 2012',
        description: 'R&D for prototype stroke rehabilitation device'
    }],
};

// Model - projects
const projects = {
    projects: [{
        title: 'Feedreader Testing',
        dates: 'Oct, 2018',
        description: 'Added Jasmine tests to a provided feedreader to ensure webpage was functioning as intended.',
        images: ['images/197x148.gif']
    }, {
        title: 'Arcade Game',
        dates: 'Sep, 2018 - Oct, 2018',
        description: 'Frogger game clone web application using object oriented JavaScript, event listeners, and DOM manipulation.',
        images: ['images/197x148.gif', 'images/197x148.gif']
    }, {
        title: 'Memory Game',
        dates: 'Sep, 2018',
        description: 'Memory game web application using DOM manipulation and event listeners',
        images: ['images/197x148.gif']
    }, {
        title: 'Portfolio Website',
        dates: 'Sep, 2018',
        description: 'Portfolio website to showcase Udacity and personal projects',
        images: ['images/197x148.gif']
    }],
};

// View
const view = {
    // Renders the header
    renderHeader: function() {
        // Render the header
        $('#header').prepend(HTMLheaderRole);
        $('#header').prepend(HTMLheaderName);
    },

    // Renders the contacts section
    renderContacts: function() {
        // Render the contacts
        $('#topContacts').append(HTMLemail);
        $('#topContacts').append(HTMLlinkedin);
        $('#topContacts').append(HTMLgithub);
        $('#topContacts').append(HTMLlocation);
    },

    // Renders the bio section
    renderBio: function() {
        // Render the bio
        $('#header').append(HTMLbioPic);
        $('#header').append(HTMLwelcomeMsg);
    },

    // Renders the skills section
    renderSkills: function() {
        // Render the skills
        $('#header').append(HTMLskillsStart);
        $('#skills').append(HTMLskills);
    },

    // Renders a work experience entry
    renderWorkExperience: function(employer, title, dates, location, description) {
        // Create a document fragment
        const docFrag = $(document.createDocumentFragment());

        // Render the work entry start
        docFrag.append(HTMLworkStart);

        // Grab the start of the work entry
        docFrag.children('.work-entry').append(employer + title);
        docFrag.children('.work-entry').append(dates);
        docFrag.children('.work-entry').append(location);
        docFrag.children('.work-entry').append(description);

        // Append the work entry
        $('#workExperience').append(docFrag);
    },

    // Renders a project entry
    renderProject: function(title, dates, description, image) {
        // Create a document fragment
        const docFrag = $(document.createDocumentFragment());

        // Render the project start
        docFrag.append(HTMLprojectStart);

        // Grab the start of the project
        docFrag.children('.project-entry').append(title);
        docFrag.children('.project-entry').append(dates);
        docFrag.children('.project-entry').append(description);
        docFrag.children('.project-entry').append(image);

        // Append the project entry
        $('#projects').append(docFrag);
    },

    // Renders a school entry
    renderSchool: function(name, degree, dates, location, major) {
        // Create a document fragment
        const docFrag = $(document.createDocumentFragment());

        // Render the school start
        docFrag.append(HTMLschoolStart);

        // Grab the start of the school entry
        docFrag.children('.education-entry').append(name + degree);
        docFrag.children('.education-entry').append(dates);
        docFrag.children('.education-entry').append(location);
        docFrag.children('.education-entry').append(major);

        // Append the school entry
        $('#education').append(docFrag);
    },

    // Renders the online courses heading
    renderOnlineCoursesHeading: function () {
        // Append the online classes section heading
        $('#education').append(HTMLonlineClasses);
    },

    // Renders an online course
    renderOnlineCourse: function(title, school, dates, url) {
        // Create a document fragment
        const docFrag = $(document.createDocumentFragment());

        // Render the course start
        docFrag.append(HTMLschoolStart);

        // Add the online classes
        docFrag.children('.education-entry').append(title + school);
        docFrag.children('.education-entry').append(dates);
        docFrag.children('.education-entry').append(url);

        // Append the online class to the education section
        $('#education').append(docFrag);
    },

    // Renders the work map
    renderMap: function() {
        // Append Google map to mapDiv
        $('#mapDiv').append(googleMap);
    }
};

// Octopus - builder
const builder = {
    // Runs all display functions in order
    init: function() {
        builder.displayHeader();
        builder.displayContacts();
        builder.displayBio();
        builder.displaySkills();
        builder.displayWorkExperience();
        builder.displayProjects();
        builder.displaySchools();
        builder.displayOnlineCoursesHeading();
        builder.displayOnlineCourses();
        builder.displayMap();
    },

    // Displays the header
    displayHeader: function() {
        // Modify data in the header
        HTMLheaderName = HTMLheaderName.replace('%data%', bio.name);
        HTMLheaderRole = HTMLheaderRole.replace('%data%', bio.role);

        // Display the header
        view.renderHeader();
    },

    // Displays the contacts
    displayContacts: function() {
        // Modify data in the contact section
        HTMLmobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        HTMLemail = HTMLemail.replace('%data%', bio.contacts.email);
        HTMLlinkedin = HTMLlinkedin.replace('%data%', bio.contacts.linkedin);
        HTMLgithub = HTMLgithub.replace('%data%', bio.contacts.github);
        HTMLlocation = HTMLlocation.replace('%data%', bio.contacts.location);

        // Display the contacts
        view.renderContacts();
    },

    // Displays the bio
    displayBio: function() {
        // Modify data in the bio section
        HTMLbioPic = HTMLbioPic.replace('%data%', bio.biopic);
        HTMLwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

        // Display the contacts
        view.renderBio();
    },

    // Displays the skills
    displaySkills: function() {
        // Modify data in the skills section
        let skillListItems = '';

        bio.skills.forEach(function(skill) {
            skillListItems = skillListItems + HTMLskills.replace('%data%', skill);
        });

        HTMLskills = skillListItems;

        // Display skills
        view.renderSkills();
    },

    // Displays the work experiences
    displayWorkExperience: function() {
        // Display each work experience
        work.jobs.forEach(function(job) {
            // Modify data in the work experience section
            const workEmployer = HTMLworkEmployer.replace('%data%', job.employer);
            const workTitle = HTMLworkTitle.replace('%data%', job.title);
            const workDates = HTMLworkDates.replace('%data%', job.dates);
            const workLocation = HTMLworkLocation.replace('%data%', job.location);
            const workDescription = HTMLworkDescription.replace('%data%', job.description);

            // Display work experience
            view.renderWorkExperience(workEmployer, workTitle, workDates, workLocation, workDescription);
        });
    },

    // Displays the projects
    displayProjects: function() {
        // Display each project
        projects.projects.forEach(function(project) {
            // Modify data in the project entry
            const projectTitle = HTMLprojectTitle.replace('%data%', project.title);
            const projectDates = HTMLprojectDates.replace('%data%', project.dates);
            const projectDescription = HTMLprojectDescription.replace('%data%', project.description);

            // Update the images HTML
            let projectImages = '';

            project.images.forEach(function(image) {
                projectImages = projectImages + HTMLprojectImage.replace('%data%', image);
            });

            // Display the project
            view.renderProject(projectTitle, projectDates, projectDescription, projectImages);
        });
    },

    // Displays the schools
    displaySchools: function() {
        // Display each school
        education.schools.forEach(function(school) {
            // Modify data in the school entry
            const schoolName = HTMLschoolName.replace('%data%', school.name);
            const schoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
            const schoolDates = HTMLschoolDates.replace('%data%', school.dates);
            const schoolLocation = HTMLschoolLocation.replace('%data%', school.location);

            // Update the major HTML
            let schoolMajors = '';

            school.majors.forEach(function(major) {
                schoolMajors = schoolMajors + HTMLschoolMajor.replace('%data%', major);
            });

            // Display the school
            view.renderSchool(schoolName, schoolDegree, schoolDates, schoolLocation, schoolMajors);
        });
    },

    // Displays the online courses heading
    displayOnlineCoursesHeading: function() {
        view.renderOnlineCoursesHeading();
    },

    // Displays the online courses
    displayOnlineCourses: function() {
        // Display each course
        education.onlineCourses.forEach(function(course){
            // Modify data in the course entry
            const onlineTitle = HTMLonlineTitle.replace('%data%', course.title);
            const onlineSchool = HTMLonlineSchool.replace('%data%', course.school);
            const onlineDates = HTMLonlineDates.replace('%data%', course.dates);
            const onlineURL = HTMLonlineURL.replace('%data%', course.url);

            // Display the course
            view.renderOnlineCourse(onlineTitle, onlineSchool, onlineDates, onlineURL);
        });
    },

    // Displays the map
    displayMap: function() {
        // Display the map
        view.renderMap();
    }
};

builder.init();