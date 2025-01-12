document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");
    form.addEventListener("submit",(e)=>{
        e.preventDefault();

        const jobTitle = document.getElementById("job-title").value;
        const companyName = document.getElementById("company-name").value;
        const location = document.getElementById("location").value;
        const employmentType = document.querySelector('input[name="employment-type"]:checked')?.value;
        const minSalary = document.getElementById("min-salary").value;
        const maxSalary = document.getElementById("max-salary").value;
        const description = document.getElementById("description").value;
        const skills = document.getElementById("skills").value;
        const experienceRequired = document.getElementById("experience-required").checked;
        const degreeRequired = document.getElementById("degree-required").checked;
        const deadline = document.getElementById("deadline").value;

        const jobPosting = {
            jobTitle,
            companyName,
            location,
            employmentType,
            salaryRange: { min: minSalary, max: maxSalary },
            description,
            skills,
            requirements: { experienceRequired, degreeRequired },
            deadline,
          };

          // Get the existing job postings from localStorage (if any)
    let jobPostings = JSON.parse(localStorage.getItem("jobPostings")) || [];

    // Add the new job posting to the array
    jobPostings.push(jobPosting);

    // Save the updated job postings array to localStorage
    localStorage.setItem("jobPostings", JSON.stringify(jobPostings));

    // Redirect to employer dashboard or home page (you can modify this based on your flow)
    window.location.href = "./home.html"; // or './dashboard.html' for employer dashboard
    });
});