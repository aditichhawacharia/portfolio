/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aditi Chhawacharia",
  title: "Hi, I'm Aditi",
  subTitle: emoji(
    "High school junior interested in Computer Science, AI, & Entrepreneurship 🚀"
  ),
  resumeLink:
    "empty", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/aditi-chhawacharia/",
  gmail: "chhawacharia.aditi@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "Programmer. Innovator. Content Creator",
  skills: [
    emoji(
      "⚡ Skilled in Java, Python, JavaScript, HTML, CSS. Experience with complex problem-solving and developing innovative solutions."
    ),
    emoji("⚡ Experience in video editing, marketing strategies, audience engagement and creating engaging content across platforms."),
    emoji(
      "⚡Passionate about building new ventures and exploring entrepreneurial opportunities."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

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
   //{
    //  skillName: "sql-database",
    //  fontAwesomeClassname: "fas fa-database"
    //},
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName:"java",
      fontAwesomeClassname:"fab fa-java"
    },
    {
      skillName:"leadership",
      fontAwesomeClassname:"fas fa-users"
    },
    {
      skillName:"marketing",
      fontAwesomeClassname:"fas fa-chart-line"
    },
    {
      skillName:"entrepreneurship",
      fontAwesomeClassname:"fas fa-lightbulb"
    },
    {
      skillName: "content creation",
      fontAwesomeClassname: "fab fa-youtube"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Walnut Grove High School",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfaRsio9nN7qM62jUHUVPydAKdDzvCmkVAg&s",
      subHeader: "High School Diploma",
      duration: "Aug 2023-May 2026",
      desc: "Grade 11",
      descBullets:["Notable Coursework: AP Computer Science A(5), AP Calculus AB(4), AP Calculus BC, Computer Science 3",
         "President of Girls Who Code WG Chapter, VP of French National Honor Society"]
    }
  ]
};
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Fellow",
      company: "Headstarter AI",
      companylogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkUdlMvs2RawuH6V3YyKb9mrPFaPGbHqO3Q&s",
      date: "July 2024 – Present",
      descBullets: [
        "Building 5+ AI Apps and APIs using Nextjs, OpenAI, Pinecone, StripeAPI with 98% accuracy as seen by 1000 users",
        "Developing projects from design to deployment leading 4+ engineering fellows using MVC design patterns",
        "Coaching by Amazon, Bloomberg and Capital One engineers on Agile, CI/CD, Git and microservice patterns"
      ]
    },
    {
      role: "Founder, Chief Executive Officer, Tech Instructor & Director",
      company: "TechFirst",
      companylogo: require("./assets/images/logo5.png"),
      date: "May 2024 – Present",
      desc: "TechFirst is an organization providing virtual coding bootcamps (breaking down high level concepts) promoting tech exposure and skills to youth worldwide.",
      descBullets: [
        "Have reached several members of our community through Python Bootcamps and more", 
        "Lead Instructor and Curriculum Developer, teaching kids through 3 hour classes with Classworks, Homework, Quizzes, and Lecture Notes",
      ]
    },
    {
      role: "Co-Founder and Chief Technology Officer",
      company: "Operation Nexus",
      companylogo: require("./assets/images/op2.jpg"),
      date: "November 2023 – Present",
      desc: "International Marketing and Web Development Agency.",
      descBullets:["Operation Nexus has experience with 35+ clients, reached 60K+ accounts, 150K+ media impressions", "Co-leads an cabinet of 13+ professionals","Holds oversight of all technological aspects within the agency"]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES I WORKED ON",
  projects: [
    {
      image: require("./assets/images/3ftl.jpg"),
      projectName: "3FTL",
      projectDesc: "Solely designed and developed 3FTL's website. 3FTL is a mental health service for first-responders.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://3ftl.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/stealth.jpg"),
      projectName: "Stealth Startup",
      projectDesc: "CEO and Founder of E-commerce business, reaching 1K+ people",
      footerLink: [
        {
          name: "Contact me for Details",
          url: "https://www.linkedin.com/in/aditi-chhawacharia/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Python Certified",
      subtitle:
        "Certified through University of Michigan (T10 CS University)'s Python specialization, a course so rigorous, that it is on the pathway to earn a Masters of Data Science. Covers fundamental concepts of Python including DSA, Networked APIs, Interfaces, Accessing Web Data and Databases",
      image: require("./assets/images/umich.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1XvXhpRXKGhHGSb81akQ_sSRACAhjmsmZ/view"
        }
      ]
    },
    {
      title: "IBM AI Professional Developer",
      subtitle:
        "Certified through IBM's AI Professional Developer Specialization. Learnt the fundamental concepts, key terms, building blocks, and applications of AI, how to use Python and Flask to develop and deploy AI applications on the web, and how to build generative AI-powered apps and chatbots using various frameworks and technologies.",
      image: require("./assets/images/ibm.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    {
      title: "DECA Marketing Communications State Finalist, District Winner",
      subtitle:
        "After competing against nearly 120+ other people in Marketing Communication series, a competition consisting of a a 10 minute in-person roleplay and a comprehensive marketing core examination, encompassing content from all avenues within the marketing and business field, I was one of the few state finalists for Marketing Communications, one of the most competitive events in DECA.",
      image: require("./assets/images/deca.jpg"),
      imageAlt: "DECA Logo",
      footerLink: [
        {
          name: "The Event",
          url: "https://www.deca.org/compete/marketing-communications-series"
        }
      ]
    },

    {
      title: "Web Developer",
      subtitle: "Certified through University of Michigan (a T10 University)'s Web Dev specialization; covers how to write syntactically correct HTML5 and CSS3, and how to create interactive web experiences with JavaScript, allowing to develop high quality web sites that, work seamlessly on mobile, tablet, and large screen browsers accessible.",
      image: require("./assets/images/umich.png"),
      imageAlt: "Umich Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1gY66Wu_6IgHmykl_UOT9t2rsJpl2HnxO/view"}
      ]
    },
    {
      title: "T20 World Cup Intern/Volunteer",
      subtitle: "Was selected to take part in the development of the T20 Cricket World Cup Matches in Dallas. Spent 6+ hours training, 30+ hours volunteering, as a token of hardwork, got to see USA vs Canada, USA vs Pakistan, Bangladesh vs Srilanka without any cost.",
      image: require("./assets/images/t20.png"),
      imageAlt: "ICC Logo",
      footerLink: [
        {name: "Badge", url: "https://www.credly.com/badges/3549a344-373a-4278-abdf-ee2e79b4e5e9/linked_in_profile"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  Linkedin: "https://www.linkedin.com/in/aditi-chhawacharia/",
  email_address: "chhawacharia.aditi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
