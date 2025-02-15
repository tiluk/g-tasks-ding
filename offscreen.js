chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "playSound") {
    const audioPlayer = document.getElementById("audioPlayer");
    if (audioPlayer) {
      console.log("Playing audio");
      audioPlayer.play();
    } else {
      console.error("Audio element not found in offscreen document.");
    }
  }
});
