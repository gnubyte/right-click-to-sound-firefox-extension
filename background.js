// background.js

// Create context menu item
browser.contextMenus.create({
    id: "playAsAudio",
    title: "Play as Audio",
    contexts: ["selection"]
  });
  
  // Add click event listener
  browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "playAsAudio") {
      const selectedText = info.selectionText;
  
      // Send a message to the content script to play the selected text
      browser.tabs.sendMessage(tab.id, { action: "playText", text: selectedText });
    }
  });
  