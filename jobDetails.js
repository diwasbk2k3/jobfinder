document.addEventListener("DOMContentLoaded", () => {
  // Retrieve job postings from localStorage
  const jobPostings = JSON.parse(localStorage.getItem("jobPostings")) || [];

  // Assuming you want to display the first job posting
  if (jobPostings.length > 0) {
      const job = jobPostings[0]; // You can modify this to display a specific job based on its ID or index

      // Select the job details container
      const jobDetailsContainer = document.querySelector(".job-details");

      // Insert job details into the container
      jobDetailsContainer.innerHTML = `
          <h3>${job.jobTitle} at ${job.companyName}</h3>
          <p><strong>Location:</strong> ${job.location}</p>
          <p><strong>Employment Type:</strong> ${job.employmentType}</p>
          <p><strong>Salary Range:</strong> ${job.salaryRange.min} - ${job.salaryRange.max}</p>
          <p><strong>Description:</strong> ${job.description}</p>
          <p><strong>Skills:</strong> ${job.skills}</p>
          <p><strong>Requirements:</strong></p>
          <ul>
              <li>Experience Required: ${job.requirements.experienceRequired ? "Yes" : "No"}</li>
              <li>Degree Required: ${job.requirements.degreeRequired ? "Yes" : "No"}</li>
          </ul>
          <p><strong>Application Deadline:</strong> ${job.deadline}</p>
      `;
  } else {
      alert("No job postings available.");
  }
});
