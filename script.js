// This script automates the process of withdrawing sent connection requests on LinkedIn.
// Date: May 27, 2024

// To use this script, follow these steps:

// 1. Open your browser and navigate to the LinkedIn website.
// 2. Log in to your LinkedIn account if you haven't already.
// 3. Navigate to the "Sent Invitations" page: https://www.linkedin.com/mynetwork/invitation-manager/sent/
// 4. Open your browser's developer console (usually by pressing F12 or Ctrl+Shift+I on Windows/Linux, or Cmd+Option+I on macOS).
// 5. Copy and paste the entire script into the console and press Enter to execute it.

// Function to withdraw sent connection requests
async function withdrawSentConnectionRequests() {
  try {
    // Wait for the sent invitations to load
    await new Promise(resolve => setTimeout(resolve, getRandomWaitTime()));

    // Find all the "Withdraw" buttons and click on them
    const withdrawButtons = document.querySelectorAll('button.artdeco-button--3');
    for (const button of withdrawButtons) {
      button.click();

      // Wait for the popup to appear
      await new Promise(resolve => setTimeout(resolve, getRandomWaitTime()));

      // Find the "artdeco-button--primary" button in the popup and click on it
      const confirmButton = document.querySelector('button.artdeco-button--primary');
      if (confirmButton) {
        confirmButton.click();
      } else {
        console.log('Could not find the confirmation button in the popup.');
      }

      // Wait for the request to be withdrawn
      await new Promise(resolve => setTimeout(resolve, getRandomWaitTime()));
    }

    console.log('All sent connection requests have been withdrawn.');
  } catch (error) {
    console.error('Error withdrawing sent connection requests:', error);
  }
}

// Function to generate a random wait time
function getRandomWaitTime() {
  const minWaitTime = 3000; // 3 seconds in milliseconds
  const maxWaitTime = 10000; // 10 seconds in milliseconds
  const longWaitTime = 16000; // 16 seconds in milliseconds
  const randomWaitTime = Math.floor(Math.random() * (maxWaitTime - minWaitTime + 1)) + minWaitTime;

  // Occasionally return the long wait time
  return Math.random() < 0.2 ? longWaitTime : randomWaitTime;
}

// Call the function to start withdrawing sent connection requests
withdrawSentConnectionRequests();
