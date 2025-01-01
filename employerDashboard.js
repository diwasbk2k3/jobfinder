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

    // Get the small div to display applicants
    const applicantsList = document.getElementById("applicants-list");

    // Clear any previous applicants from the small div
    applicantsList.innerHTML = '';

    // If applicants are found for the job title, display them
    if (applicants && applicants.length > 0) {
        const applicantListHTML = applicants.map(applicant => `<p>${applicant}</p>`).join('');
        applicantsList.innerHTML = `<h3>Applicants for ${jobTitle}:</h3>${applicantListHTML}`;
    } else {
        applicantsList.innerHTML = `<p>No applicants for ${jobTitle} yet.</p>`;
    }
}

// Attach the event listeners to each "View Applicants" button after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
    const viewApplicantButtons = document.querySelectorAll('.view-applicants');

    // Add event listeners to buttons
    viewApplicantButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const jobTitle = e.target.closest('article').querySelector('h3').textContent;
            viewApplicants(jobTitle);
        });
    });
});
