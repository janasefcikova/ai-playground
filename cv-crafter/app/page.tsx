'use client'

import { useState } from 'react'
import MasterCV from './components/MasterCV'
import CV from './components/CV'
import JobDescription from './components/JobDescription'
import CoverLetter from './components/CoverLetter'
import Keywords from './components/Keywords'

export default function Dashboard() {
  const [masterCV, setMasterCV] = useState(`John Doe
Software Developer

Summary:
Experienced software developer with 5+ years of experience in web development, specializing in React and Node.js.

Skills:
- JavaScript, TypeScript, HTML, CSS
- React, Redux, Next.js
- Node.js, Express
- MongoDB, PostgreSQL
- Git, Docker, AWS

Experience:
Software Developer, Tech Co. (2018-Present)
- Developed and maintained multiple web applications using React and Node.js
- Implemented responsive designs and improved application performance
- Collaborated with cross-functional teams to deliver high-quality software

Education:
Bachelor of Science in Computer Science, University of Technology (2014-2018)`)

  const [cv, setCV] = useState(`John Doe
Software Developer

Summary:
Passionate software developer with expertise in React and Node.js, seeking new opportunities to create innovative web applications.

Skills:
- JavaScript, React, Node.js
- HTML, CSS, Responsive Design
- Git, Agile methodologies

Experience:
Software Developer, Tech Co. (2018-Present)
- Developed responsive web applications using React
- Collaborated with team members to deliver projects on time

Education:
Bachelor of Science in Computer Science, University of Technology (2014-2018)`)

  const [jobDescription, setJobDescription] = useState(`We are seeking a talented Software Developer to join our dynamic team. The ideal candidate will have:

- Strong proficiency in JavaScript, React, and Node.js
- Experience with modern web development practices
- Excellent problem-solving skills and attention to detail
- Ability to work collaboratively in an Agile environment

Responsibilities:
- Develop and maintain web applications using React and Node.js
- Collaborate with designers to implement responsive user interfaces
- Participate in code reviews and contribute to best practices
- Troubleshoot and debug issues in existing applications

Requirements:
- Bachelor's degree in Computer Science or related field
- 3+ years of experience in web development
- Proficiency in React, Node.js, and modern JavaScript
- Experience with version control systems (e.g., Git)
- Strong communication skills and ability to work in a team

If you're passionate about creating great web experiences and want to work with cutting-edge technologies, we'd love to hear from you!`)

  const [coverLetter, setCoverLetter] = useState(`Dear Hiring Manager,

I am writing to express my strong interest in the Software Developer position at your company. With over 5 years of experience in web development, specializing in React and Node.js, I believe I would be a valuable addition to your team.

Throughout my career, I have developed and maintained multiple web applications, implementing responsive designs and improving application performance. My experience aligns perfectly with the requirements outlined in your job description, including:

- Strong proficiency in JavaScript, React, and Node.js
- Experience with modern web development practices
- Excellent problem-solving skills and attention to detail
- Ability to work collaboratively in an Agile environment

I am particularly excited about the opportunity to contribute to your team's projects and help create innovative web applications. My background in collaborating with cross-functional teams and my passion for staying up-to-date with the latest web technologies make me an ideal candidate for this role.

Thank you for considering my application. I look forward to the opportunity to discuss how my skills and experience can contribute to your team's success.

Sincerely,
John Doe`)

  const [keywords, setKeywords] = useState(['React', 'Node.js', 'JavaScript', 'web development', 'Agile'])

  const handleKeywordHighlight = (word: string) => {
    if (!keywords.includes(word)) {
      setKeywords([...keywords, word])
    }
  }

  const handleKeywordRemove = (word: string) => {
    setKeywords(keywords.filter(kw => kw !== word))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MasterCV masterCV={masterCV} setMasterCV={setMasterCV} />
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 p-4">
        <CV cv={cv} setCV={setCV} />
        <JobDescription
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
          onHighlight={handleKeywordHighlight}
        />
        <CoverLetter
          coverLetter={coverLetter}
          setCoverLetter={setCoverLetter}
        />
        <Keywords
          keywords={keywords}
          cv={cv}
          jobDescription={jobDescription}
          coverLetter={coverLetter}
          onRemove={handleKeywordRemove}
        />
      </div>
    </div>
  )
}

