import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/resume')
      .then(response => setResume(response.data))
      .catch(error => console.error('Error fetching resume data:', error));
  }, []);

  if (!resume) return <div>Loading...</div>;

  return (
    <div className="App">
      <header>
        <h1>{resume.name}</h1>
        <p>{resume.contact.location} | {resume.contact.phone} | {resume.contact.email}</p>
      </header>
      <section>
        <h2>Objective</h2>
        <p>{resume.objective}</p>
      </section>
      <section>
        <h2>Education</h2>
        {resume.education.map((edu, index) => (
          <div key={index}>
            <h3>{edu.institution}</h3>
            <p>{edu.period}</p>
            <p>{edu.details}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>Skills</h2>
        <ul>
          {resume.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Volunteer Work & Internship</h2>
        {resume.volunteer.map((vol, index) => (
          <div key={index}>
            <h3>{vol.organization}</h3>
            <p>{vol.period}</p>
            <ul>
              {vol.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h2>Computer Skills</h2>
        <ul>
          {resume.computerSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Interests / Activities</h2>
        <ul>
          {resume.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Jobs</h2>
        {resume.jobs.map((job, index) => (
          <div key={index}>
            <h3>{job.position} - {job.company}</h3>
            <p>{job.period}</p>
            <ul>
              {job.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h2>Availability</h2>
        <p>{resume.availability}</p>
      </section>
      <section>
        <h2>References</h2>
        <p>{resume.references}</p>
      </section>
    </div>
  );
}

export default App;