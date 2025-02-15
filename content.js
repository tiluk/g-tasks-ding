console.log("Content script injected.");

let ariaLabelLang = "";

const lang = document.documentElement.getAttribute("lang");
if (lang === "en-US") {
  ariaLabelLang = "Mark completed";
} else if (lang === "de") {
  ariaLabelLang = "Erledigt";
} else {
  console.log("Unsupported language:", lang);
}

const targetElementSelector = 'button[aria-label="' + ariaLabelLang + '"]';
const ding = new Audio("sounds/ding.mp3");

function setupClickListeners() {
  const targetElements = document.querySelectorAll(targetElementSelector);

  if (targetElements.length > 0) {
    targetElements.forEach((targetElement) => {
      if (!targetElement.hasAttribute("data-listener-added")) {
        targetElement.addEventListener("click", handleClick);
        targetElement.setAttribute("data-listener-added", "true");
      }
    });
  } else {
    setTimeout(setupClickListeners, 1000);
  }
}

function handleClick(event) {
  chrome.runtime.sendMessage({ action: "playSound" });
}

setupClickListeners();