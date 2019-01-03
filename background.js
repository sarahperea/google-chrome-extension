/*
onInstalled is fired when extension is first installed,
extension is updated to a new version,
and when Chrome is updated to a new version.
*/

/*
chrome.storage API is used to store, retrieve and track changes to user 
data.
related: localStorage API
*/

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, 
function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'mgt.teamapp.ai', schemes: ['https'] }
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
