const header = {
  title: 'ವಿv.',
  homepage: '/personal_website'
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Vivek V',
  role: 'Software Engineer',
  description:
    'Welcome to my website. It is currently under active development.You can download my resume below to get up-to-date information about me. Be sure to drop me an email on suggestions, ideas and job opportunities. I am graduating with a Master\'s degree this Fall from University of California, Riverside and would love to work with you and your company.',
    resume:"./Vivek_Venkateshprasad_Resume.pdf",
  social: {
    linkedin: 'https://www.linkedin.com/in/vi-vek/',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Travel Search Engine',
    description:
      "Created a travel destination search engine utilizing BERT for natural language processing, based on data scraped from Reddit. Integrated with Maps API to accurately display the precise location of destinations along with relevant travel information",
    stack: ["React", "Javascript", "Python", "Reddit API", "BERT", "LLM", "Maps API", "Beautiful Soup", "Selenium"],
    sourceCode: 'https://github.com/Chuckoo/IR',
  },
  {
    name: 'Automatic Appraisal Form Application',
    description:"Modernized the appraisal form submission process by developing a full-fledged application. Improved efficiency and user experience by replacing the outdated, manual process with an automated system. Successfully launched the application for use in the academic year 2020-21.",
    stack: ["Java", "JDBC", "WAMP","MySQL","Apache Tomcat"],
    sourceCode: 'https://github.com/Chuckoo/FacultyForm',
  },
  {
    name: 'Android App for UTSAV',
    description:
      "Designed and implemented a comprehensive mobile application for the annual college fest, 'Utsav'. Enhanced event management and participant engagement through streamlined digital solutions.",
    stack: ["Flutter", "Dart", "Android Developmnt", "Firebase", "Firestore" ],
    sourceCode: 'https://github.com/Chuckoo/UtsavApp',
  },
  {
    name: 'P.I.G.L.E.T',
    description:
      '"Platform for Issues and Grievances Laid out by Emerging Technologies". Created a progressive web application that users can report civic problems in real time that gets directly reported to the authorities responsible for handling them.',
    stack: ["React Native", "Javascript", "Google Firestore/Firebase", "Google Cloud Platform"],
    sourceCode: 'https://github.com/Project-Piglet-20/Piglet'
  }
]

const skills = [
  "Python",
  "JavaScript",
  "Java",
  "Dart",
  "SQL",
  "NOSQL/MQL",
  "C",
  "C++",
  "HTML5/CSS",
  "Django",
  "Flask",
  "FastAPI",
  "numpy/pandas",
  "Apache Spark (PySpark)",
  "OpenCV",
  "Pytorch",
  "Tensorflow",
  "Flutter",
  "GCP",
  "AWS",
  "Linux",
  "Jenkins",
  "Git",
  "Bootstrap",
  "React",
  "Selenium",
  "Advanced OS",
  "Theory of Computation",
  "Algorithms",
  "Computational Biology (Bioinformatics)",
  "Unix/Shell Programming",
  "MySQL",
  "PhpMyAdmin",
  "Oracle",
  "MongoDB",
  "Mongo Atlas",
  "PostgreSQL",
  "Firestore"
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'vivekv.contact@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vi-vek/',
}

export { header, about, projects, skills, contact }
