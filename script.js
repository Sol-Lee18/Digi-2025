/* const textarea = document.getElementById("text-area");

function f2(e){
 if(textarea.style.fontWeight == "bold")
 {
    textarea.style.fontWeight = "normal";
    e.classList.remove("active");
 }
 else
 {
    textarea.style.fontWeight = "bold";
    e.classList.add("active");
 }
}

function f3(e){
  if(textarea.style.fontStyle == "italic")
 {
    textarea.style.fontStyle = "normal";
    e.classList.remove("active");
 }
 else
 {
    textarea.style.fontStyle = "italic";
    e.classList.add("active");
 }
}

function f4(e){
  if(textarea.style.textDecoration == "line-through")
 {
    textarea.style.textDecoration = "none";
    e.classList.remove("active");
 }
 else
 {
    textarea.style.textDecoration = "line-through";
    e.classList.add("active");
 }
}

function f5(e){
  if(textarea.style.textDecoration == "underline")
 {
    textarea.style.textDecoration = "none";
    e.classList.remove("active");
 }
 else
 {
    textarea.style.textDecoration = "underline";
    e.classList.add("active");
 }
}
*/




let optionsButtons = document.querySelectorAll(".optionButton");
let fontOptionsButton = document.querySelectorAll(".fontOptionsButton");
let formatButtons = document.querySelectorAll(".format");
let writingArea = document.getElementById("text-area");

const initializer = () => {
  highlighter(formatButtons, false);
}

const modifyText = (command, defaultUi, value) => {
  document.execCommand(command, defaultUi, value);
};

optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
})



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

window.onload = initializer();




const textArea = document.getElementById('text-area');
const wordCountDisplay = document.getElementById('word-count');

textArea.addEventListener('input', updateWordCount);

function updateWordCount() {
  const text = textArea.value.trim();
  const words = text.split(/\s+/).length;
  wordCountDisplay.textContent = 'Word Count: ' + words;
}
