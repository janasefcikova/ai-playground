document.addEventListener('DOMContentLoaded', () => {
  const jobInfoElement = document.getElementById('jobInfo');
  const statusSelect = document.getElementById('status');
  const notesTextarea = document.getElementById('notes');
  const saveButton = document.getElementById('save');
  const lastUpdatedElement = document.getElementById('lastUpdated');

  chrome.storage.local.get(['currentJobId', 'currentJobTitle', 'currentCompanyName'], (result) => {
    const jobId = result.currentJobId;
    const jobTitle = result.currentJobTitle;
    const companyName = result.currentCompanyName;
    
    jobInfoElement.textContent = `${jobTitle} at ${companyName}`;
    
    // Load existing data
    chrome.storage.local.get(jobId, (data) => {
      if (data[jobId]) {
        statusSelect.value = data[jobId].status || 'Not Applied';
        notesTextarea.value = data[jobId].notes || '';
        if (data[jobId].lastUpdated) {
          lastUpdatedElement.textContent = `Last updated: ${data[jobId].lastUpdated}`;
        }
      } else {
        lastUpdatedElement.textContent = 'Not yet updated';
      }
    });

    saveButton.addEventListener('click', () => {
      const now = new Date();
      const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
      
      const jobData = {
        status: statusSelect.value,
        notes: notesTextarea.value,
        lastUpdated: formattedDate
      };

      chrome.storage.local.set({[jobId]: jobData}, () => {
        console.log('Job data saved');
        lastUpdatedElement.textContent = `Last updated: ${formattedDate}`;
      });
    });
  });
});

