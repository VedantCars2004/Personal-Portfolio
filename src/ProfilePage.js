import React from 'react';
import LinkedinLogo from './Assets/linkedin_logo.png';
import GithubLogo from './Assets/github_logo.png';
import EmailLogo from './Assets/email_logo.png';
import HandshakeLogo from './Assets/handshake_logo.png';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const ProfilePage = () => {
    useEffect(() => {
        document.title = 'Vedant Gohel';
    }, []); 
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
               <br></br>
               <div className='social-links'>
                   <a href = "https://www.linkedin.com/in/vedantgohel" target = "_blank" rel = "noopener noreferrer">
                       <img src = {LinkedinLogo} alt  = "LinkedIn logo" />
                   </a>
                   <a href = "https://github.com/VedantCars2004" target = "_blank" rel = "noopener noreferrer">
                       <img src = {GithubLogo} alt  = "Github logo" />
                   </a>
                   <a href = "https://app.joinhandshake.com/stu/users/50257339" target = "_blank" rel = "noopener noreferrer">
                       <img src = {HandshakeLogo} alt  = "Handshake logo" />
                   </a>
                   <a href = "https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCDkzdzvvTfJVQBNwLQJpDxLjzGrNdbHhGhXSMspHbTHZQfjwHsxXBmPMKdmXHCSKkZmCL" target = "_blank" rel = "noopener noreferrer">
                       <img src = {EmailLogo} alt  = "Email logo" />
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
                   <h3>Course Assistant for CS124- University of Illinois</h3>
                   <ul><li>January 2024- Present</li></ul>
                   <p>CA for a class of 3800+ students. Assisted students in mastering Java, strengthened their grasp of Java as an object-oriented language,
          including client-server concepts, various APIs, Android Studio, algorithms, data structures, inheritance, polymorphism, etc.
                   </p>
                   <br></br>
                   <h3>Freelancer: Website Design</h3>
                   <ul><li>May 2022- Present</li></ul>
                   <p>Utilized my React, HTML, and CSS skills to help local businesses grow by 18% by designing websites for businesses such as a lawn maintenance business,
              a consulting firm, and for my own tutoring services.
                   </p>
                   <br></br>
                   <h3>Vedant's Tutoring</h3>
                   <ul><li>May 2023- Present</li></ul>
                   <p>Self initiated math/ SAT private tutoring for local community and international students.
          Leveraged my proficiency in Math and a SAT score of 1530 to assist students in enhancing their SAT scores by up to 140+ points and mastering Math.
                   </p>
                   <br></br>
                   <h3>Mathnasium</h3>
                   <ul><li>November 2022- July 2023</li></ul>
                   <p>Math Instructor for students K-12. Teaching experience in improving students' mathematical proficiency
           and confidence. Enhanced leadership and time management skills by teaching multiple students together.
                   </p>
               </div>
               <div className='gis-projects'>
                    <h2>GIS Projects</h2>
                    <h3><a href="https://storymaps.arcgis.com/stories/cb7e27c3c8734e9aa2c0fe6358040810" target="_blank" rel="noopener noreferrer">ArcGIS Online and Pro Projects Portfolio ↗</a></h3>
                    <p>This portfolio shows my GIS Cartography work including layouts such as figure and standalone layouts, infographics, digital elevation models, point clouds,
                         open data and ArcGIS Field maps, and Georeferencing.</p>
                </div>
           </div>


           <div className='sections-right'>
               <div className='projects'>
                   <h2>Projects</h2>
                   <h3>Personal Portfolio Website</h3>
                   <p>Deployed my web developement skills to create a personal portfolio showcasing my classroom and extracurricular projects in addition to a portfolio
          of my skills and knowledge. Utilized VSCode, Github, and Netlify to build and host this project.
                   </p>
                   <ul>
                       <li>React</li>
                       <li>HTML</li>
                       <li>CSS</li>
                       <li>Javascript</li>
                   </ul>
                   <br></br>
                   <h3>Vedant's Tutoring: Private Tutoring Website</h3>
                   <p>Created a private tutoring website for myself which connects new parents to my course offerings and information about sessions. Used React, HTML, CSS, JS. 
                    Features new UI design such as cards and AUTOMATED email creation submission upon filling contact form.</p>
                   <ul>
                       <li>React</li>
                       <li>HTML</li>
                       <li>CSS</li>
                       <li>Javascript</li>
                   </ul>
                   <br></br>
                   
                   <Link to="https://github.com/VedantCars2004/Word3T"><h3>Word 3T ↗</h3></Link>
                   <p>A twist on the classic game Tic Tac Toe, created using Java in Android Studio. Played
                    with words instead of Xs and Os, two players go head to head to see who can create a line of
                    words that have atleast one letter in common. 
                   </p>
                   <ul>
                       <li>Java</li>
                       <li>Android Studio</li>
                   </ul>
                   <br></br>
                   <Link to="/projects"><h3>Quick Projects ↗</h3></Link>
                   <p>Small scale projects made in C++ and Java that perform tasks such as seam carving an image or finding the
                       easiest path over a mountain using input of elevation data.
                   </p>
                   <ul>
                       <li>C++</li>
                       <li>Java</li>
                   </ul>
                   <br></br>
                   <h3>Freelancing Website for Consulting Business</h3>
                   <p>Created this website as a request from a consulting business to grow their startup. In addition to a third party software, used HTML and CSS to design elements
          for the website.
                   </p>
                   <ul>
                       <li>3rd Party Software</li>
                       <li>HTML</li>
                       <li>CSS</li>
                   </ul>
                   <br></br>
                   <h3>Freelancing Website for Lawn Maintenance Business</h3>
                   <p>Crafted this website to help reachability of this local lawn care service in our community.
                   </p>
                   <ul>
                       <li>3rd Party Software</li>
                       <li>HTML</li>
                       <li>CSS</li>
                   </ul>
               </div>
               <div className='skills'>
                   <h2>Skills</h2>
                   <h3>Backend Development</h3>
                   <ul>
                       <li>Java</li>
                       <li>C++</li>
                       <li>Javascript</li>
                   </ul>
                   <br></br>
                   <h3>Frontend Development</h3>
                   <ul>
                       <li>React</li>
                       <li>HTML</li>
                       <li>CSS</li>
                   </ul>
                   <br></br>
                   <h3>Data Management</h3>
                   <ul>
                       <li>Python</li>
                       <li>SQL</li>
                   </ul>
                   <br></br>
                   <h3>Theory</h3>
                   <ul>
                       <li>Discrete Structures</li>
                       <li>Linear Algebra & Matrix Theory</li>
                   </ul>
               </div>
           </div>
       </div>
   );
};


export default ProfilePage;

