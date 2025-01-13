chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "openPopup") {
    chrome.storage.local.set({
      currentJobId: request.jobId,
      currentJobTitle: request.jobTitle,
      currentCompanyName: request.companyName
    }, () => {
      chrome.action.openPopup();
    });
  }
});

