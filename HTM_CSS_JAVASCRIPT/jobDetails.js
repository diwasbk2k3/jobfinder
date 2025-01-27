document.addEventListener("DOMContentLoaded", () => {
    const selectedJob = JSON.parse(localStorage.getItem("selectedJob"));

    if (selectedJob) {
        const jobDetailsContainer = document.getElementById("job-details-container");

        jobDetailsContainer.innerHTML = `
            <h3>${selectedJob.jobTitle}</h3>
            <p><strong>Company:</strong> ${selectedJob.companyName}</p>
            <p><strong>Location:</strong> ${selectedJob.location}</p>
            <p><strong>Employment Type:</strong> ${selectedJob.employmentType}</p>
            <p><strong>Salary:</strong> ${selectedJob.salaryRange.min} - ${selectedJob.salaryRange.max}</p>
            <p><strong>Skills:</strong> ${selectedJob.skills}</p>
            <p><strong>Job Description:</strong> ${selectedJob.description}</p>
            <p><strong>Application Deadline:</strong> ${selectedJob.deadline}</p>
        `;
    } else {
        alert("Job not found.");
        window.location.href = './home.html';
    }
});
