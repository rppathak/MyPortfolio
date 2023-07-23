import './App.css';
const home = {
    // all the properties are optional - can be left empty or deleted
    name: 'Ratnapriya Pathak',
    role: 'Front End Engineer',
    description:
      'B.Tech Graduate in Computer Science from BV. I am a full stack developer looking for an opportunity to use my knowledge in practical word. I have built various websites using react and mern srack. I am paasionate about my work and working to improve my skills.',
    resume: 'https://example.com',
    social: {
      linkedin: 'https://www.linkedin.com/in/ratnapriya-pathak-818075210/',
      github: 'https://github.com/rppathak',
    },
  }

  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      image:'ims.png',
      name: 'Internship Management System',
      description:
        'Manages the company data for colleges. Enable users to register and login as per their roles. It will be generating reports based on input from the user.',
      stack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MYSQL'],
      sourceCode: 'https://github.com/rppathak/Internship_Management_System'
    },
    {
      image:'News.png',
      name: 'News Hub',
      description:
        'Responsive news website which shows daily headlines of different categories. It has various features like top load, infinite scroll, typing animation etc.',
      stack: ['React'],
      sourceCode: 'https://github.com/rppathak/NewsHub'
    },
    {
      image: 'StickyNotes.png',
      name: 'Sticky Notes',
      description:
        'Responsive application which performs crud operations. Enables users to store their personal notes in cloud.',
      stack: ['MongoDB','Node','Express','React'],
      sourceCode: 'https://github.com/rppathak/StickyNotes'
    },
  ]

  export { home,projects }