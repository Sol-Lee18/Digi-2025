let optionsButtons = document.querySelectorAll(".optionButton");
let fontOptionsButton = document.querySelectorAll(".fontOptionsButton");
let formatButtons = document.querySelectorAll(".format");

const initializer = function() {
  highlighter(formatButtons, false);
}

const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      if (needsRemoval) {
        let alreadyActive = false;

        if (button.classList.contains("active")) {
          alreadyActive = true;
        }

        highligherRemover(className);
        if(!alreadyActive) {
          button.classList.add("active");
        }
      } else {
        button.classList.toggle("active");
      }
    });
  });
};

window.on




const textArea = document.getElementById('text-area');
const wordCountDisplay = document.getElementById('word-count');

textArea.addEventListener('input', updateWordCount);

function updateWordCount() {
  const text = textArea.value.trim();
  const words = text.split(/\s+/).length;
  wordCountDisplay.textContent = 'Word Count: ' + words;
}





