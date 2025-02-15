let offscreenDocumentCreated = false;

async function createOffscreenDocument() {
  if (offscreenDocumentCreated) {
    return;
  }

  try {
    await chrome.offscreen.createDocument({
      url: 'offscreen.html',
      reasons: ['AUDIO_PLAYBACK'],
      justification: 'Play ding sound when task is checked off',
    });
    offscreenDocumentCreated = true;
    console.log("Offscreen document created");
  } catch (error) {
    console.error("Error creating offscreen document:", error);
  }
}

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "playSound") {
    await createOffscreenDocument();
    chrome.runtime.sendMessage({ target: "offscreen", action: "playSound" });
  }
});