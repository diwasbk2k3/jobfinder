document.addEventListener("DOMContentLoaded", () => {
  const jobPostingsContainer = document.getElementById("job-postings-container");

  // Get the job postings from localStorage
  const jobPostings = JSON.parse(localStorage.getItem("jobPostings")) || [];

  if (jobPostings.length > 0) {
      // Loop through each job posting and display it as a card
      jobPostings.forEach((job) => {
          const jobCard = document.createElement("article");
          jobCard.classList.add("job-card");

          jobCard.innerHTML = `
              <h3 class="job-title">${job.jobTitle}</h3>
              <p class="company-name"><strong>Company:</strong> ${job.companyName}</p>
              <p class="employment-type"><strong>Employment Type:</strong> ${job.employmentType}</p>
              <p class="salary-range"><strong>Salary:</strong> ${job.salaryRange.min} - ${job.salaryRange.max}</p>
              <p class="skills"><strong>Skills:</strong> ${job.skills}</p>
              <p class="deadline"><strong>Deadline:</strong> ${job.deadline}</p>
              <button class="apply-btn" data-job-id="${job.jobId}">Apply Now</button>
          `;

          jobPostingsContainer.appendChild(jobCard);
      });

      // Add click event listener to each apply button
      document.querySelectorAll('.apply-btn').forEach(button => {
          button.addEventListener('click', (e) => {
              const jobId = e.target.getAttribute('data-job-id');
              const selectedJob = jobPostings.find(job => job.jobId === jobId);
              
              // Save the selected job in localStorage
              localStorage.setItem('selectedJob', JSON.stringify(selectedJob));
              
              // Redirect to the job details page
              window.location.href = './jobDetails.html';
          });
      });
  } else {
      jobPostingsContainer.innerHTML = "<p>No jobs posted yet.</p>";
  }
});
