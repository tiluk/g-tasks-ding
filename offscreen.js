chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "playSound") {
    const ding = new Audio("sounds/ding.mp3");
    ding.play();
  }
});
