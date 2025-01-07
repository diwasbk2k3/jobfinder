// Sample data for applicants
const applicantsData = {
    "Job Title 1": ["Applicant 1", "Applicant 2", "Applicant 3"],
    "Job Title 2": ["Applicant 1", "Applicant 2"],
    "Job Title 3": ["Applicant 1", "Applicant 2", "Applicant 3"],
    "Job Title 4": ["Applicant 1", "Applicant 2"],
    "Job Title 5": ["Applicant 1", "Applicant 2"],
    "Job Title 6": ["Applicant 1"],
    "Job Title 7": ["Applicant 1", "Applicant 2"],
    "Job Title 8": ["Applicant 1", "Applicant 2"],
    "Job Title 9": ["Applicant 1", "Applicant 2", "Applicant 3"],
    "Job Title 10": ["Applicant 1"]
};

// Function to handle the click on 'View Applicants'
function viewApplicants(jobTitle) {
    // Get the applicants for the clicked job title
    const applicants = applicantsData[jobTitle];

    // Get the small div and big div
    const bigDiv = document.querySelector('.big-div');
    const smallDiv = document.querySelector('.small-div');

    // Hide the big-div and show the small-div
    bigDiv.style.display = 'none';
    smallDiv.style.display = 'block';

    // Populate the small-div with applicants and a back button
    const applicantsList = document.getElementById("applicants-list");
    applicantsList.innerHTML = `
        <h3>Applicants for ${jobTitle}:</h3>
        ${applicants && applicants.length > 0 
            ? applicants.map(applicant => `<p>${applicant}</p>`).join('') 
            : `<p>No applicants for ${jobTitle} yet.</p>`}
        <button id="back-btn">Back</button>
    `;

    // Attach the back button functionality
    document.getElementById("back-btn").addEventListener('click', () => {
        // Show the big-div and hide the small-div
        bigDiv.style.display = 'block';
        smallDiv.style.display = 'none';
    });
}

// Attach the event listeners to each "View Applicants" button after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
    const viewApplicantButtons = document.querySelectorAll('.view-applicants');

    // Add event listeners to buttons
    viewApplicantButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const jobTitle = e.target.closest('article').querySelector('h3').textContent;
            viewApplicants(jobTitle);
        });
    });

    // Initially hide the small-div
    document.querySelector('.small-div').style.display = 'none';
});
