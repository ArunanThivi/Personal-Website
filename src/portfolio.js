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
  username: "Arunan T",
  title: "Hi! I'm Arunan",
  subTitle: emoji(
    "A naturally curious, creative, and motivated student 👨‍💻 Experienced in full stack development in node.JS/React and backend development with Python and Java."
  ),
  resumeLink: "https://cdn.arunanthivi.com/arunan_thiviyanathan_swe.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ArunanThivi",
  linkedin: "https://www.linkedin.com/in/arunanthivi/",
  gmail: "mail@arunanthivi.com",
  instagram: "https://instagram.com/arunanthivi",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "A Little Bit About Me",
  subTitle: "I'm just a chill guy trying to make cool stuff",
  skills: [
    emoji(
      "🏀 When I'm not cranking the codes, I enjoy watching and playing Basketball (Go Rockets!)"
    ),
    emoji(
      "🎧 Whether I'm studying, working, or just chilling, I am ALWAYS listening to music"
    ),
    emoji("🪛 I always have at least one random gadget I'm tinkering on")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-typescript"
    },
    {
      skillName: "go",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fab fa-kubernetes"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California, San Diego",
      logo: require("./assets/images/ucsd.png"),
      subHeader: "Masters: Computer Science",
      duration: "September 2024 - March 2026",
      desc: "GPA: 3.710"
    },
    {
      schoolName: "University of California, Berkeley",
      logo: require("./assets/images/CalLogo.png"),
      subHeader: "Major: Computer Science",
      duration: "August 2019 - December 2022",
      desc: "GPA: 3.648"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "JavaScript/TypeScript", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "65%"
    },
    {
      Stack: "C/C++",
      progressPercentage: "55%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Student Researcher",
      company: "University of California",
      companylogo: require("./assets/images/ucsd.png"),
      date: "September 2024 - Present",
      desc: "Contributor to the Junkyard Computing Project",
      descBullets: [
        "Architected a distributed autograder in Go deployed on a Kubernetes cluster of repurposed Pixel Fold smartphones",
        "Integrated Gradescope and GitHub Classroom webhooks to trigger containerized grading jobs upon student submission",
        "Instrumented mobile-node cluster with Prometheus and Grafana, achieving 9̃9.6% uptime over 3 months of active use"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Supplyframe",
      companylogo: require("./assets/images/supplyframeLogo.jpeg"),
      date: "June 2023 - September 2024",
      desc: "Worked on developing the Supplyframe Design-to-Source Intelligence Platform",
      descBullets: [
        "Built out Risk Index feature to allow customers to customise how they assess risk in sourcing components",
        "Assisted in developing a new User Interface framework to use across all Supplyframe products",
        "Developed a tool to assist suppliers in price negotiations utilizing Chat-GPT"
      ]
    },

    {
      role: "Software Engineering Intern",
      company: "Qualtrics",
      companylogo: require("./assets/images/xm.jpg"),
      date: "May 2022 - August 2022",
      desc: "Worked with Ticketing team to allow clients to view and restore deleted tickets from the XM platform",
      descBullets: [
        "Wrote technical design specification with considerations for scalability and usability",
        "Worked cross functionally with Product Managers, quality engineers and UI designers to solidify product requirements"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some of my Favorite Projects",
  projects: [
    {
      image: require("./assets/images/uscd_mcbba.jpg"),
      projectName: "Club Basketball",
      projectDesc:
        "Film, Box scores and interactive game charts for UCSD's Club Basketball team",
      footerLink: [
        {
          name: "Check it out!",
          url: "http://club.arunanthivi.com/"
        },
        {
          name: "Frontend Code",
          url: "https://github.com/ArunanThivi/club"
        },
        {
          name: "Backend code",
          url: "https://github.com/ArunanThivi/club-basketball-backend"
        }

        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/SpotifyLogo.png"),
      projectName: "FeatureSearch",
      projectDesc:
        "A Web App to analyze trends in a user's music tastes, based on the past 6 months of listening history through Spotify",
      footerLink: [
        {
          name: "Check it out!",
          url: "http://spotify.arunanthivi.com/"
        }
        //  you can add extra buttons here.
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
      title: "Most Efficent Design (3rd)",
      subtitle:
        "Placed 3rd in global competition for designing the most efficent image classification accelerator using Catapult HLS. Competition was sponsored by Siemens Inc..",
      image: require("./assets/images/siemenssoftware_logo.jpg"),
      footerLink: [
        {
          name: "Project Specification",
          url: "https://hls.academy/accelerating-inferencing-using-hls-hackathon/"
        }
      ]
    },
    {
      title: "Best Design (3rd)",
      subtitle:
        "Placed 3rd out of 1200 students in designing the most efficent RISC-V CPU for UC Berkeley's Computer Architecture course. Competition was sponsored by Apple Inc.",
      image: require("./assets/images/Apple-Logo.png"),
      footerLink: [
        {
          name: "Project Specification",
          url: "https://cs61c.org/fa20/projects/proj3/#design-contest"
        },
        {
          name: "Announcement",
          url: "https://drive.google.com/file/d/1NA2D6D6UfB3Vs4ceBfJPgAgwg63km61b/view?usp=sharing"
        }
      ]
    },
    {
      title: "The Leadership Award",
      subtitle:
        "Established in 1934, The Leadership Award is a one-year, merit-based scholarship that recognizes undergraduate students at UC Berkeley who demonstrate innovative, initiative-driven leadership impacting their academic, work, or community environments. Awarded to top 2% of students",
      image: require("./assets/images/CAALogo.png"),
      footerLink: [
        {
          name: "About the Award",
          url: "https://alumni.berkeley.edu/community/scholarships/leadership-award"
        }
      ]
    },

    {
      title: "Eagle Scout",
      subtitle:
        "Achieved highest rank in Boy Scouts of America. Earned 36 Merit Badges and independently designed and managed community service project for Galveston Island State Park. Awarded to 1% of Boy Scouts nationally",
      image: require("./assets/images/BSALogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1oexl2KNM3oIjnFMZPaQc-Rw1hoIBvUTy/view?usp=sharing"
        },
        {
          name: "Final Project",
          url: "https://drive.google.com/file/d/1Ox5SQBidFUhURZxuU0dh9zHMUMUDE88q/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "I've started writing about general musings",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.arunanthivi.com/healthcare-is-a-scam",
      title: "Healthcare is a scam",
      description:
        "Figuring out my insurance plan when I first started working sent me down a rabbit hole of the American health insurance industry. I documented my findings for the next poor soul."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to discuss a project or just want to say hi? Hit me up!",
  email_address: "mail@arunanthivi.com"
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
  isHireable
};
