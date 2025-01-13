function addJobManagementButtons() {
  const jobCards = document.querySelectorAll('.job-card-container');
  
  jobCards.forEach((jobCard, index) => {
    if (!jobCard.querySelector('.job-management-btn')) {
      const managementBtn = document.createElement('button');
      managementBtn.textContent = 'Manage';
      managementBtn.className = 'job-management-btn';
      managementBtn.style.cssText = 'margin-left: 10px; padding: 5px 10px; background-color: #0a66c2; color: white; border: none; border-radius: 4px; cursor: pointer;';
      
      managementBtn.addEventListener('click', () => {
        const jobId = `job-${index}`;
        const jobTitle = jobCard.querySelector('.job-card-list__title')?.textContent.trim() || 'Unknown Job';
        const companyName = jobCard.querySelector('.job-card-container__company-name')?.textContent.trim() || 'Unknown Company';
        
        chrome.runtime.sendMessage({
          action: "openPopup", 
          jobId: jobId,
          jobTitle: jobTitle,
          companyName: companyName
        });
      });
      
      jobCard.appendChild(managementBtn);
    }
  });
}

// Run the function when the page loads
addJobManagementButtons();

// Use a MutationObserver to handle dynamically loaded content
const observer = new MutationObserver(addJobManagementButtons);
observer.observe(document.body, { childList: true, subtree: true });

