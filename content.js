// content.js

// Listen for messages from the background script
browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "playText") {
      const utterance = new SpeechSynthesisUtterance(request.text);
      speechSynthesis.speak(utterance);
    }
  });
  