

import emoji from "react-easy-emoji";

const TopMenu = [
  {id: '#skills', name: 'Skills'},
  {id: '#experience', name: 'Work Experiences'},
  {id: '#projects', name: 'Projects'},
  {id: '#opensource', name: 'Open Source'},
  {id: '#tools', name: 'Tools'},
  {id: '#achievements', name: 'Achievements'},
  {id: '#contact', name: 'Contact Me'},
]

const greeting = {
  username: "Sunil",
  title: "Hi all, I'm Sunil",
  subTitle: emoji("A passionate Software Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Django and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1IB8BTAeFSCuc3VLKU9YTxSQScO9OCLEt/view?usp=sharing"
};


// document.title = `${greeting.username} Portfolio`


const socialMediaLinks = {

  github: "https://github.com/rayvikram",
  linkedin: "https://www.linkedin.com/in/vikram-ray/",
  gmail: "thevikramray@gmail.com",
  facebook: "facebook.com/thevikramray",
  gitlab: "gillab-link",
  Instagram:'sds',
Twitter: 'dss',

};



const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop interactive Front end / User Interfaces for your web"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Develop robust backend and REST API with Django | NodeJS")
  ],



  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
   
  ]
};



const techStack = {
  viewSkillBars: false, 
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design",  
      progressPercentage: "75%" 
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};




const workExperiences = {
  viewExperiences: true, 
  experience: [
    {
      role: "Full Stack Developer",
      company: "Ezedox",
      date: "June 2019 – October 2020",
      desc: "Working on ReactJS | Redux | Django | Django-rest-framwork to develop UI and REST API with our awsome team",
      descBullets: [
        "Build UI of ezedox-inventory with ReactJS with awsome state manager Redux",
        "Developed Backend and UI of realtime Notifications and Updates with django-channels and websocket",
        "Developed backend and UI of Highly Customizable Licensing",
        "UI and Backend of customizable Roles/Group by extending django-groups"
      ]
    },
    {
      role: "Assistant Software Developer",   
      company: "Firecompass",
      date: "October 2020 – Present",
      desc: "Working on ReactJS | Redux | Django | FastAPI | Dockers | Many more ...",
      descBullets: [
        "Working mainly on Microservices with React, Django, FastAPI & Firebase as the main stack",
        "Reporting system with scheduling and supporting excel, pdf, etc as a final result",
        "Optimized SQL/ORM Query, Segregated APIs to increase performance by 50%",
        "Created 5+ microservices for different features",
        "Created 3+ python libraries to be used in other services to increase code reusability"
      ]
    }
  ]
};



const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "rayvikram", 
  showGithubProfile: "true" 
};


// Big projects that you have created 
const bigProjectSection = {
  title: emoji("Big project "),
  subtitle: "Some projects that i build to solve real life problems!",
  cards: [
    {
      title: "MyTournament",
      subtitle: "Gaming Event Webapp where user can organize and join Gaming Events",
      
      footerLink: [
        { name: "Website", url: "http://mytournament.tk/" },
        { name: "GitHub", url: "https://github.com/rayvikram/mytournament-frontend" },
      ]
    },
    {
      title: "Node Blog",
      subtitle: "A blog created with NodeJS and EJS",
      footerLink: [
        { name: "Website", url: "https://blogvikram.herokuapp.com/" },
        { name: "GitHub", url: "https://github.com/rayvikram/node-blog" },
      ]
    },
    {
      title: "LetStylus",
      subtitle: "Ecommerce",
      footerLink: [
        { name: "Website", url: "https://letstylus.com/" },
      ]
    },
    
  ]
};


// Tools that you have created 
const toolsSection = {
  title: emoji("Tools ⚒ "),
  subtitle: "Some Cool Tools and Games that I have build !",
  cards: [
    {
      title: "GitHub Visualizer",
      subtitle: "View all details of a GitHub profile in one place",
      footerLink: [
        { name: "Website", url: "https://rayvikram.github.io/github-visualizer/" },
        { name: "GitHub", url: "https://github.com/rayvikram/github-visualizer" },
      ]
    },
    {
      title: "React Notepad",
      subtitle: "Notepad created with React",
      footerLink: [
        { name: "Website", url: "https://rayvikram.github.io/notepad/" },
        { name: "GitHub", url: "https://github.com/rayvikram/notepad" },
      ]
    },
    {
      title: "Simons Game",
      subtitle: "This is a representation of famous simon game",
      footerLink: [
        { name: "Website", url: "https://rayvikram.github.io/simon-game/" },
        { name: "GitHub", url: "https://github.com/rayvikram/simon-game" },
      ]
    },
    {
      title: "Google Meet Clone",
      subtitle: "Google Meet Clone with WebRTC to make video calls. View and make sure to enable webcam.",
      footerLink: [
        { name: "Website", url: "https://meet-google.herokuapp.com/" },
        { name: "GitHub", url: "https://github.com/rayvikram/GoogleMeet-Clone-With-WebRTC" },
      ]
    }    
  ]
};


// Your Achievement Section Include Your Certification Talks and More
const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications and Some Cool Stuff that I have done !",

  cards: [
    {
      title: "CS50: CS50's Introduction to Computer Science",
      subtitle: "An introduction to the intellectual enterprises of computer science and the art of programming from EDX",
      footerLink: [
        { name: "Certification", url: "https://courses.edx.org/certificates/8a3056693e2e46e38ccc341cefeda798" },
      ]
    },
    {
      title: "The Complete 2020 Web Development Bootcamp",
      subtitle: "A 50+ hours of Udemy course that is focused on HTML, CSS, Javascript, Node, React, MongoDB and more!",
      footerLink: [
        { name: "Certification", url: "https://www.udemy.com/certificate/UC-FPNPPZ7J/" },
      ]
    },
    {
      title: "React Certification",
      subtitle: "It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.",
      
      footerLink: [
        { name: "Certification", url: "" },
      ]
    },
  ]
};




// NOTE: set your profile pic, bio, location on github to reflect on portfolio
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7974550078",
  email_address: "thevikramray@gmail.com"
};


export {
  greeting, socialMediaLinks, skillsSection, techStack,
  workExperiences, openSource, achievementSection,
  contactInfo, toolsSection, bigProjectSection, TopMenu
};