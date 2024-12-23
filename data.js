export const bio = [
  "I'm Shadman Mubashir , a Mechanical Design Engineer passionate about crafting innovative solutions and driving excellence in engineering design with a degree in Mechatronics Engineering",
  "I've developed a solid foundation in both mechanical and electronic systems, enabling me to approach complex challenges with a versatile and holistic perspective.",
  // "Beyond technical skills, I am continuously exploring new methodologies and advancements in mechanical design. I’m eager to expand my expertise in CAD, product development, and engineering project management while collaborating with like-minded professionals. I’m excited to connect with others who share a passion for engineering innovation and look forward to contributing value to both my team and the industry. " ,
  // "Feel free to reach out—I’d love to discuss ideas, projects, or opportunities to collaborate!" ,
];

export const skills = [
  {
    title: "Languages",
    skillName: "Python, C, PLC Ladder Diagram, PLC SFC, PLC ST, PLC FBD, PLC IL",
    color: "1",
    percentage: "80",
  },
  {
    title: "Simulation",
    skillName: "MATLAB, , Proteus, Logisim, Logosoft",
    color: "6",
    percentage: "70",
  },
  {
    title: "CAD Softwares",
    skillName: "SOLIDWORKS, CATIA V5, Siemens NX",
    color: "4",
    percentage: "80",
  },
  {
    title: "Version Control",
    skillName: "GitHub",
    color: "7",
    percentage: "70",
  },
  {
    title: "Documentation",
    skillName: "MS Word, Powerpoint",
    color: "3",
    percentage: "90",
  },
  {
    title: "Graphics",
    skillName: "Adobe Illustrator",
    color: "5",
    percentage: "50",
  },
//   {
//     title: "IDE",
//     skillName: "VS Code",
//     color: "6",
//     percentage: "70",
//   },
];

export const projects = {
  webProjects: [
    {
      projectName: "Programming Diaries",
      image: "images/programmingdiaries.png",
      summary:
        "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
      preview: "https://programmingdiaries.herokuapp.com/",
      techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
    },
    {
      projectName: "Find Your Bank",
      image: "images/findyourbank.png",
      summary:
        "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
      preview: "https://clever-fermi-0d5d76.netlify.app",
      techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
    },
    {
      projectName: "Web Portfolio",
      image: "images/portfolio.png",
      summary:
        "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
      preview: "https://github.com/vinaysomawat/Travographer-Portal",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
    {
      projectName: "Resume Builder",
      image: "images/resume-builder.png",
      summary:
        "Browser based editor to build and download Resumes in a customizable templates.",
      preview: "https://vinaysomawat.github.io/Resume-Builder",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
  ],
  softwareProjects: [
    {
      projectName: "Pizza Ordering ChatBot",
      image: "images/pizzaorderchatbot.png",
      summary:
        "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
      preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
      techStack: ["Dailogflow", "Firebase"],
    },
    {
      projectName: "WhatsApp-Bot",
      image: "images/whatsappbot.jpg",
      summary:
        "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
      preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
      techStack: ["Selenium", "Chrome Webdriver", "Python"],
    },
    {
      projectName: "Bill Generator",
      image: "images/billgenerator.png",
      summary:
        "GUI to transfer data to excel sheets and generate bills on the local shops.",
      preview: "https://github.com/vinaysomawat/Bill-Generator",
      techStack: ["Tkinter", "Openxlpy", "Python"],
    },
  ],
  androidProjects: [
    {
      projectName: "NITW-CSE",
      image: "images/nitwcse.jpg",
      summary:
        "The Application display details of Department courses, reference books, research, publication and faculty profile.",
      preview: "https://github.com/vinaysomawat/NITW-CSE",
      techStack: ["JAVA", "XML", "Android"],
    },
    {
      projectName: "CareerHigh-App",
      image: "images/carrerhigh.png",
      summary:
        "The Application display the webpages of website careerhigh.in in android devices.",
      preview: "https://github.com/vinaysomawat/CareerHigh-Android",
      techStack: ["JAVA", "XML", "Android"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "SnylloAir.com",
      image: "images/snylloair.png",
      summary:
        "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
      preview: "https://www.snylloair.com/",
      techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
    },
    {
      projectName: "Delivery+",
      image: "images/AM-Logo-.png",
      summary: "Android Application to display website in android devices.",
      preview:
        "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
      techStack: ["Android", "JAVA", "Play Store"],
    },
  ],
};

export const experience = [
  {
    title: "BJIT LTD.",
    duration: "November 2024 - Present",
    subtitle: "Mechanical Design Engineer",
    details: ["Responsibilities:", 
      "• Develop designs for products and structures according to client specifications and requirements.",
      "• Create technical drawings and 3D models using specialized CAD software. ",
      "• Programming to use provided API for Design Automation, to create macros or even develop design plugins. ",
      "• Use AI to Perform quality control checks on drawings and models to ensure accuracy and completeness. ",
      "• Ensure designs are feasible, functional, and meet industry codes and standards. ",
      "• Collaborate with project managers, engineers, and other stakeholders to gather information and ensure designs meet project timelines and objectives. ",
      "• Revise and update designs as necessary based on feedback from stakeholders or changes in project requirements."],
    tags: ["Siemens NX", "Documentation", "Solidworks", "CATIA v5"],
    icon: "truck ",
  },
  {
    title: "BJIT LTD.",
    duration: "September 2024 - November 2024",
    subtitle: "Trainee Mechanical Design Engineer",
    details: ["Training Scope:" ,
                    "• CAD Automation using Python (Pycatia)" ,
                    "• CAD using CATIA V5", 
                    "• PDM / PLM softwares like Teamcentre, Enovia", 
                    "• Creating design macros using SOLIDWORKS API and Visual Basics"] ,
    tags: ["Python", "Pycatia", "PDM/PLM"],
    icon: "truck ",
  },

  {
    title: "Bangladesh Industrial & Technical Assistance Centre (BITAC)",
    duration: "April 2022",
    subtitle: "Engineering Intern",
    details: [
      `Acquired hands-on experience in operating and managing various CNC machines,  
            enhancing proficiency in precision machining and automation technologies contributing to a comprehensive understanding of industrial manufacturing processes.`,
   
    ],
    tags: [
      "Manufacturing Process",
      "CNC Machining",
      "PLC",
  
    ],
    icon: "heartbeat",
  },

];

export const education = [
  {
    title: "B.Sc in Mechatronics Engineering",
    duration: "2019 - 2024",
    subtitle: "Rajshahi University of Engineering & Technology, Rajshahi, Bangladesh",
    details: [],
    tags: [
      "Computer Aided Design",
      "Engineering Drawing",
      "Automation",
      "Design of Mechatronic Systems",
      "Sensors and Instrumentations",
      "Computer Integrated Manufacturing",
      "Human-Machine Interaction",
      "Machine Dynamics and Vibrations",
      "Thermo & Fluid Dynamics",
      "Industrial Management",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Higher Secondary Certificate",
    duration: "",
    subtitle: "Saint Joseph Higher Secondary School",
    details: [],
    tags: ["Physics", "Chemistry", "Mathematics"],
    icon: "book",
  },
];

export const footer = [
//   {
//     label: "Dev Profiles",
//     data: [
//       {
//         text: "Stackoverflow",
//         link: "https://stackoverflow.com/users/8461233/vinay-somawat",
//       },
//       {
//         text: "GitHub",
//         link: "https://github.com/vinaysomawat",
//       },
//       {
//         text: "LeetCode",
//         link: "https://leetcode.com/somawatvinay/",
//       },
//     ],
//   },
//   {
//     label: "Resources",
//     data: [
//       {
//         text: "Enable Dark/Light Mode",
//         func: "enableDarkMode()",
//       },
//       {
//         text: "Print this page",
//         func: "window.print()",
//       },
//       {
//         text: "Clone this page",
//         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
//       },
//     ],
//   },
  {
    label: "Links",
    data: [
    //   {
    //     text: "Linkedin",
    //     link: "https://www.linkedin.com/in/vinaysomawat/",
    //   },
    //   {
    //     text: "Twitter",
    //     link: "https://twitter.com/thesigmakid",
    //   },
      // {
      //   text: "Buy me a coffee",
      //   link: "https://www.buymeacoffee.com/r194dME8y",
      // },
    //   {
    //     text: "Github/vinaysomawat.github.io",
    //     link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
    //   },
    // ],
  },

];
