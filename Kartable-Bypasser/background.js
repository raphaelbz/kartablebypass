// Fichier background.js
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "removeOverlays"});
  });
});
