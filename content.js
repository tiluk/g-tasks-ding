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
    console.log("Target elements found:", targetElements);
    targetElements.forEach((targetElement) => {
      if (!targetElement.hasAttribute("data-listener-added")) {
        targetElement.addEventListener("click", handleClick);
        targetElement.setAttribute("data-listener-added", "true");
      }
    });
  } else {
    console.log("Target elements not found yet. Trying again...");
    setTimeout(setupClickListeners, 1000);
  }
}

function handleClick(event) {
  console.log("You checked off a task! 🎉");
  ding.play();
}

setupClickListeners();
