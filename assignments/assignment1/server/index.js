const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

// Dummy resume data
const resumeData = {
  name: "John Doe",
  contact: {
    location: "Toronto, Ontario",
    phone: "555-123-4567",
    email: "johndoe@example.com",
  },
  objective: "My objective is to establish a strong foundation for my career, acquire new skills, and gain valuable work experience to build a successful career in my field of interest.",
  education: [
    {
      institution: "Toronto High School",
      period: "September 2018 – June 2022",
      details: "Graduated with honors.",
    },
    {
      institution: "University of Toronto",
      period: "September 2022 – Present",
      details: "Bachelor of Science in Computer Science – Currently Enrolled",
    },
  ],
  skills: [
    "Strong analytical and problem-solving skills",
    "Excellent communication and teamwork abilities",
    "Quick learner with the ability to adapt to new environments",
    "Proficient in time management and organization",
    "Multilingual: Fluent in English, French, and Spanish",
    "Creative thinker with a passion for innovation",
  ],
  volunteer: [
    {
      organization: "Community Outreach Program, Toronto",
      period: "2020 – 2022",
      details: [
        "Assisted in organizing community events and fundraisers.",
        "Distributed informational materials and engaged with community members.",
        "Collaborated with a team to ensure smooth event execution.",
      ],
    },
    {
      organization: "Tech Solutions Inc., Toronto",
      period: "Summer 2023",
      details: [
        "Supported the development team in debugging and testing software applications.",
        "Gained hands-on experience with Java and Python programming.",
        "Assisted in creating technical documentation for new software features.",
      ],
    },
  ],
  computerSkills: [
    "Proficient in Microsoft Office Suite (Word, Excel, PowerPoint)",
    "Experienced in programming languages: Java, Python, and HTML/CSS",
    "Familiar with database management systems (MySQL)",
    "Basic knowledge of web development frameworks (React, Node.js)",
  ],
  interests: [
    "Playing basketball and soccer",
    "Participating in coding hackathons",
    "Reading science fiction novels",
    "Exploring new technologies and gadgets",
  ],
  jobs: [
    {
      position: "Part-Time Sales Associate",
      company: "Retail Store, Toronto",
      period: "June 2021 – Present",
      details: [
        "Assisted customers with product inquiries and purchases.",
        "Managed inventory and restocked shelves.",
        "Handled cash transactions and maintained a clean store environment.",
      ],
    },
    {
      position: "Summer Intern",
      company: "Local Library, Toronto",
      period: "Summer 2022",
      details: [
        "Organized and cataloged books and resources.",
        "Assisted library visitors with locating materials and using library services.",
        "Supported the library staff in daily administrative tasks.",
      ],
    },
  ],
  availability: "Flexible availability, including weekends.",
  references: "Available upon request.",
};

// Route to fetch resume data
app.get('/api/resume', (req, res) => {
  res.json(resumeData);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});