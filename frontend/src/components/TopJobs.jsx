import React from 'react';
import './TopJobs.css';
import topJobsIcon from '../assets/topJobsIcon.png';


function TopJobs() {
  return (
    <section className="top-jobs-section">
      <div className="section-header">
      <img src={topJobsIcon} className="topJobsIconClass" alt="Top Jobs Icon" />
        <h2>Top Jobs</h2>
      </div>
      <div className="job-listing">
        <div className="job-posting">
          <h3>Frontend Developer</h3>
          <p>Join our team to build modern web applications using React and other cutting-edge technologies.</p>
          <a href="#apply" className="apply-btn">Apply Now</a>
        </div>
        <div className="job-posting">
          <h3>Backend Engineer</h3>
          <p>Work on scalable server-side solutions and manage databases using Node.js and MongoDB.</p>
          <a href="#apply" className="apply-btn">Apply Now</a>
        </div>
        <div className="job-posting">
          <h3>Full Stack Developer</h3>
          <p>Develop both the frontend and backend of web applications using a variety of modern frameworks.</p>
          <a href="#apply" className="apply-btn">Apply Now</a>
        </div>
        <div className="job-posting">
          <h3>UI/UX Designer</h3>
          <p>Create user-friendly and aesthetically pleasing interfaces for web and mobile applications.</p>
          <a href="#apply" className="apply-btn">Apply Now</a>
        </div>
        <div className="job-posting">
          <h3>Data Scientist</h3>
          <p>Analyze large datasets to uncover trends and insights using Python and machine learning algorithms.</p>
          <a href="#apply" className="apply-btn">Apply Now</a>
        </div>
        <div className="job-posting">
          <h3>Product Manager</h3>
          <p>Lead product strategy, development, and execution for digital products and services.</p>
          <a href="#apply" className="apply-btn">Apply Now</a>
        </div>
        <div className="job-posting">
          <h3>DevOps Engineer</h3>
          <p>Ensure the smooth deployment and operation of software by working with infrastructure and automation tools.</p>
          <a href="#apply" className="apply-btn">Apply Now</a>
        </div>
        <div className="job-posting">
          <h3>Marketing Specialist</h3>
          <p>Develop and execute marketing campaigns to promote our products and services to new customers.</p>
          <a href="#apply" className="apply-btn">Apply Now</a>
        </div>
        <div className="job-posting">
          <h3>Software Tester</h3>
          <p>Test and debug software applications to ensure they meet the highest quality standards.</p>
          <a href="#apply" className="apply-btn">Apply Now</a>
        </div>
        <div className="job-posting">
          <h3>SEO Specialist</h3>
          <p>Optimize website content to increase organic search rankings and drive traffic.</p>
          <a href="#apply" className="apply-btn">Apply Now</a>
        </div>
        <div className="job-posting">
          <h3>Mobile App Developer</h3>
          <p>Build and maintain innovative mobile applications for iOS and Android platforms.</p>
          <a href="#apply" className="apply-btn">Apply Now</a>
        </div>
        <div className="job-posting">
          <h3>Cybersecurity Analyst</h3>
          <p>Protect the organization's data and infrastructure by identifying vulnerabilities and responding to threats.</p>
          <a href="#apply" className="apply-btn">Apply Now</a>
        </div>
        <div className="job-posting">
          <h3>Cloud Engineer</h3>
          <p>Design and manage cloud infrastructure to enable scalable and reliable cloud computing solutions.</p>
          <a href="#apply" className="apply-btn">Apply Now</a>
        </div>
        <div className="job-posting">
          <h3>Network Administrator</h3>
          <p>Oversee and maintain network systems, ensuring smooth connectivity and security.</p>
          <a href="#apply" className="apply-btn">Apply Now</a>
        </div>
        <div className="job-posting">
          <h3>System Administrator</h3>
          <p>Manage IT infrastructure, including servers and networks, ensuring optimal system performance.</p>
          <a href="#apply" className="apply-btn">Apply Now</a>
        </div>
      </div>
    </section>
  );
}

export default TopJobs;
