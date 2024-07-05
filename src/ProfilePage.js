import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LinkedinLogo from './Assets/linkedin_logo.png';
import GithubLogo from './Assets/github_logo.png';
import EmailLogo from './Assets/email_logo.png';
import HandshakeLogo from './Assets/handshake_logo.png';
import projectsData from './bigprojects.json';

const ProfilePage = () => {
    useEffect(() => {
        document.title = 'Vedant Gohel';
    }, []); 

    const renderProjects = (projectType) => {
        return projectsData[projectType].map((project, index) => (
            <div key={index}>
                <h3>
                    {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title} ↗</a>
                    ) : (
                        project.title
                    )}
                </h3>
                <p>{project.description}</p>
                {project.skills && (
                    <ul>
                        {project.skills.map((skill, skillIndex) => (
                            <li key={skillIndex}>{skill}</li>
                        ))}
                    </ul>
                )}
                <br />
            </div>
        ));
    };

    return (
        <div className='profile-container'>
            <div className='profile-info'>
                <h1>Vedant Gohel</h1>
                <h3>Computer Science Student at University of Illinois at Urbana Champaign</h3>
                <h4>I am an aspiring freshman in Computer Science and Geographic Information Sciences at the University
                    of Illinois at Urbana Champaign, and a Dean's List recipient. I aspire to design software and use relevant knowledge and skills to
                    make a positive impact on communities. I am proficient in Java, C++, Python, SQL, React, HTML, and CSS.
                    I'm involved on campus as a Course Assistant for CS124, a member of Association for Information Systems (AIS),
                    and a member of ACM SIGMA (Math and Algorithms).
                </h4>
                <br />
                <div className='social-links'>
                    <a href="https://www.linkedin.com/in/vedantgohel" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedinLogo} alt="LinkedIn logo" />
                    </a>
                    <a href="https://github.com/VedantCars2004" target="_blank" rel="noopener noreferrer">
                        <img src={GithubLogo} alt="Github logo" />
                    </a>
                    <a href="https://app.joinhandshake.com/stu/users/50257339" target="_blank" rel="noopener noreferrer">
                        <img src={HandshakeLogo} alt="Handshake logo" />
                    </a>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCDkzdzvvTfJVQBNwLQJpDxLjzGrNdbHhGhXSMspHbTHZQfjwHsxXBmPMKdmXHCSKkZmCL" target="_blank" rel="noopener noreferrer">
                        <img src={EmailLogo} alt="Email logo" />
                    </a>
                </div>
            </div>
            <div className='sections-left'>
                <div className='education'>
                    <h2>Education</h2>
                    <h3>University of Illinois at Urbana Champaign</h3>
                    <h3>Bachelor of Science in Computer Science and Geographic Information Sciences</h3>
                    <p><b>Distinctions: </b>Dean's List recipient, 4.0 GPA</p>
                    <p><b>Involvements: </b>CS124 Course Assistant, Association of Information Systems (AIS), ACM SIGMA (Math and Algorithms)</p>
                    <p><b>Relevant Coursework: </b>Java, C++, Discrete Structures, Linear Algebra</p>
                </div>
                <div className='experience'>
                    <h2>Work Experience</h2>
                    <h3>Prompt Engineer & Beta Tester- University of Illinois</h3>
                    <ul><li>June 2024- Present</li></ul>
                    <p>Designing and refining AI prompts to understand the app’s capabilities, improving user interaction. Performing comprehensive testing and documenting prompt engineering results to ensure high accuracy and reliability of AI responses and to provide valuable insights for future response development. 
                    </p>
                    <br />
                    <h3>Course Assistant for CS124- University of Illinois</h3>
                    <ul><li>January 2024- Present</li></ul>
                    <p>CA for a class of 3800+ students. Assisted students in mastering Java, strengthened their grasp of Java as an object-oriented language,
                        including client-server concepts, various APIs, Android Studio, algorithms, data structures, inheritance, polymorphism, etc.
                    </p>
                    <br />
                    <h3>Freelancer: Website Design</h3>
                    <ul><li>May 2022- Present</li></ul>
                    <p>Utilized my React, HTML, and CSS skills to help local businesses grow by 18% by designing websites for businesses such as a lawn maintenance business,
                        a consulting firm, and for my own tutoring services.
                    </p>
                    <br />
                    <h3>Vedant's Tutoring</h3>
                    <ul><li>May 2023- Present</li></ul>
                    <p>Self initiated math/ SAT private tutoring for local community and international students.
                        Leveraged my proficiency in Math and a SAT score of 1530 to assist students in enhancing their SAT scores by up to 140+ points and mastering Math.
                    </p>
                    <br />
                    <h3>Mathnasium</h3>
                    <ul><li>November 2022- July 2023</li></ul>
                    <p>Math Instructor for students K-12. Teaching experience in improving students' mathematical proficiency
                        and confidence. Enhanced leadership and time management skills by teaching multiple students together.
                    </p>
                </div>
                <div className='skills'>
                    <h2>Skills</h2>
                    <h3>Backend Development</h3>
                    <ul>
                        <li>Java</li>
                        <li>C++</li>
                        <li>Javascript</li>
                    </ul>
                    <br />
                    <h3>Frontend Development</h3>
                    <ul>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <br />
                    <h3>Data Science/ Information Science</h3>
                    <ul>
                        <li>Python</li>
                        <li>SQL</li>
                        <li>Artifical Intelligence</li>
                    </ul>
                    <br />
                    <h3>Theory</h3>
                    <ul>
                        <li>Discrete Structures</li>
                        <li>Linear Algebra & Matrix Theory</li>
                        <li>Statistics and Probability- CS</li>
                        <li>Data Structures & OOP</li>
                    </ul>
                </div>
            </div>

            <div className='sections-right'>
            <div className='software-engineering-projects'>
                    <h2>Software Engineering Projects</h2>
                    {renderProjects('softwareEngineering')}
                </div>
                <div className='web-development-projects'>
                    <h2>Web Development Projects</h2>
                    {renderProjects('webDevelopment')}
                </div>
                <div className='ai-projects'>
                    <h2>Artificial Intelligence Projects</h2>
                    {renderProjects('ai')}
                </div>
                <div className='gis-projects'>
                    <h2>Geographic Information Science Projects</h2>
                    {renderProjects('gis')}
                </div>
                
            </div>
        </div>
    );
};

export default ProfilePage;