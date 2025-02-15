function getAriaLabel() {
  const lang = document.documentElement.getAttribute("lang");

  switch (lang) {
    case "en-US":
      return "Mark completed";
    case "de":
      return "Erledigt";
    default:
      console.log("Unsupported language:", lang);
      return "";
  }
}

const targetElementSelector = `button[aria-label="${getAriaLabel()}"]`;
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
