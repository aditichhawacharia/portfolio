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
  title: "Aditi Chhawacharia",
  subTitle: emoji(
    "AI Researcher · Full-Stack Developer · Social Impact Technologist"
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
  title: "Expertise",
  subTitle: "AI GOVERNANCE · FULL-STACK DEVELOPMENT · CIVIC TECHNOLOGY",
  skills: [
    emoji(
      "Building AI governance frameworks and conducting research at NeurIPS and UC Berkeley AI Safety Initiative"
    ),
    emoji("Developing full-stack applications with React Native, Python, and machine learning to solve real-world problems"),
    emoji(
      "Creating educational platforms that have reached 5,000+ students across 52+ countries"
    ),
    emoji(
      "Leading civic technology initiatives and empowering youth voice in municipal government decisions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "AI/ML",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
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
      subHeader: "High School Senior · Class of 2026",
      duration: "Aug 2023 - May 2026",
      desc: "Advanced coursework in Computer Science, Mathematics, and Leadership",
      descBullets: [
        "AP Computer Science A (5), AP Calculus AB (4), AP Calculus BC, Computer Science 3",
        "President: Girls Who Code, National Technical Honor Society · VP: French National Honor Society"
      ]
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
      progressPercentage: "80%"
    },
    {
      Stack: "AI/ML",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Governance Researcher",
      company: "NeurIPS 2025",
      companylogo: require("./assets/images/neurips.avif"),
      date: "2024 – Present",
      desc: "Co-authored peer-reviewed research on Multi-Stakeholder Framework for Language Model Governance",
      descBullets: [
        "Developed novel quantitative risk assessment metrics for AI systems protecting democratic institutions",
        "Selected to present findings at NeurIPS 2025 in California among leading AI policy researchers"
      ]
    },
    {
      role: "Research Assistant",
      company: "UT Dallas Human-Centered CPS Lab",
      companylogo: require("./assets/images/utd.png"),
      date: "Summer 2024",
      desc: "Selected as 1 of 4 high school researchers statewide for advanced machine learning research",
      descBullets: [
        "Co-developed multimodal posture detection system combining WiFi RSSI fingerprinting with computer vision",
        "Built React Native data collection app and decision tree classifier for real-time posture inference"
      ]
    },
    {
      role: "AI Policy Fellow",
      company: "UC Berkeley (BASIS)",
      companylogo: require("./assets/images/berkeley.png"),
      date: "2025 – Present",
      desc: "Selected as 1 of 2 high school fellows among 17 participants (10% acceptance rate)",
      descBullets: [
        "Co-authored mock California AI & Innovation Safety Act proposing evidence-based AI safety regulations",
        "Led AI governance debates and conducted policy research on responsible AI deployment"
      ]
    },
    {
      role: "Founder & Team Lead",
      company: "McKinney Tech and Data Youth Council",
      companylogo: require("./assets/images/mckinney.jpg"),
      date: "2024 – Present",
      desc: "Founded Texas's first student-led municipal technology advisory board",
      descBullets: [
        "Led development of full-stack applications improving public services for McKinney's 200,000+ residents",
        "Developed McKinney Minutes app with fine-tuned LLM to increase civic information accessibility"
      ]
    },
    {
      role: "Founder & Developer",
      company: "CyberBear.app",
      companylogo: require("./assets/images/cyberbear.jpg"),
      date: "2022 – Present",
      desc: "Gamified educational platform teaching cybersecurity and digital safety to youth worldwide",
      descBullets: [
        "Educated 5,000+ students from 52+ countries using custom-built platform with AI chatbot",
        "Partnered with 3+ NGOs educating 1,000+ rescued child laborers in India on digital safety"
      ]
    },
    {
      role: "Programming Instructor",
      company: "Best Brains Learning Center",
      companylogo: require("./assets/images/bestbrains.png"),
      date: "2024 – Present",
      desc: "Teaching programming fundamentals to K-8th grade students",
      descBullets: [
        "Teaching 35+ students programming fundamentals in Scratch and Python",
        "Led 30+ coding projects covering conditionals, loops, functions, and game development"
      ]
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
  title: "Featured Projects",
  subtitle: "IMPACTFUL PLATFORMS AND APPLICATIONS",
  projects: [
    {
      image: require("./assets/images/mckinney.jpg"),
      projectName: "McKinney Minutes",
      projectDesc: "Mobile app with fine-tuned LLM summarizing City Council meetings. Officially being implemented by McKinney city government.",
      footerLink: [
      ]
    },
    {
      image: require("./assets/images/cyberbear.png"),
      projectName: "CyberBear.app",
      projectDesc: "Gamified platform educating 5,000+ students across 52+ countries on cybersecurity. Partnering with Prosper ISD for district-wide implementation.",
      footerLink: [
      ]
    },
    {
      image: require("./assets/images/teatime.jpg"),
      projectName: "TeaTime AI",
      projectDesc: "Communication analysis app using OCR and NLP to help Gen-Z navigate social situations.",
      footerLink: [
      ]
    },
    {
      image: require("./assets/images/3ftl.jpg"),
      projectName: "3FTL Mental Health Platform",
      projectDesc: "Full-stack website providing mental health resources for firefighters with PTSD. Reached 6,000+ users and 19,000+ visits.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://3ftl.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Recognition & Awards"),
  subtitle:
    "Awards, Research Publications, and Certifications",

  achievementsCards: [
    {
      title: "NCWIT Aspirations in Computing Winner",
      subtitle:
        "Selected as 1 of 13 honorees across Dallas-Fort Worth region for exceptional achievement in computing, leadership, and social impact through technology.",
      image: require("./assets/images/ncwit.png"),
      imageAlt: "NCWIT Logo",
      footerLink: [
      ]
    },
    {
      title: "NeurIPS 2025 Research Paper",
      subtitle:
        "Co-authored peer-reviewed paper 'A Multi-Stakeholder Framework for Language Model Governance' accepted to NeurIPS Algorithmic Collective Action Workshop.",
      image: require("./assets/images/neurips.avif"),
      imageAlt: "NeurIPS Logo",
      footerLink: [
      ]
    },
    {
      title: "CodeWars Top 1%",
      subtitle:
        "Ranked in top 1% out of 3,000,000 coders globally. Solved 100+ algorithmic challenges covering advanced data structures and algorithms.",
      image: require("./assets/images/codewars.png"),
      imageAlt: "CodeWars Logo",
      footerLink: [
      ]
    },
    {
      title: "DECA International Grand Finalist",
      subtitle:
        "Top 20 Awardee in Marketing Communications at ICDC. 2x State Winner and 3x Regional Champion competing against 120+ participants.",
      image: require("./assets/images/deca.jpg"),
      imageAlt: "DECA Logo",
      footerLink: [
      ]
    },
    {
      title: "Google & FemalesinTech Scholarship",
      subtitle:
        "Awarded full-ride scholarship to complete Google's 6-course Data Analytics and Machine Learning Professional Certificate through Grow With Google program.",
      image: require("./assets/images/google.jpg"),
      imageAlt: "Google Logo",
      footerLink: [
      ]
    },
    {
      title: "Hackathon Winner (2x)",
      subtitle:
        "1st Place at TechPals Code for Change Hackathon and Advanced Knowledge Tech LLC Hackathon - both with 100+ global participants.",
      image: require("./assets/images/hackathon.jpg"),
      imageAlt: "Hackathon Logo",
      footerLink: []
    },
    {
      title: "IBM AI Professional Developer",
      subtitle:
        "Certified through IBM's AI Professional Developer Specialization covering Python, Flask, generative AI-powered apps, and web deployment of AI applications.",
      image: require("./assets/images/ibm.png"),
      imageAlt: "IBM Logo",
      footerLink: [
      ]
    },
    {
      title: "Inspiring Teen Magazine Honoree",
      subtitle:
        "Featured nationally for exemplary leadership in technology and community impact, highlighting work with CyberBear and civic technology initiatives.",
      image: require("./assets/images/inspiringteens.jpg"),
      imageAlt: "Magazine Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Technical writing and insights on AI, technology, and social impact.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "Speaking engagements and presentations"
  ),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast"),
  subtitle: "Discussions on technology and innovation",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact"),
  subtitle:
    "Interested in collaborating or discussing AI policy, civic technology, or educational platforms? Let's connect.",
  linkedin: "https://www.linkedin.com/in/aditi-chhawacharia/",
  email_address: "chhawacharia.aditi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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