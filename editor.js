/*editor*/

const textarea = document.getElementById("text-area");

function f1(e){
   let value = e.value;
   textarea.style.fontSize = value + "px";
}

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

function f6(e){
   textarea.style.textAlign = "left";
}

function f7(e){
   textarea.style.textAlign = "center";
}

function f8(e){
   textarea.style.textAlign = "right";
}  


/*word count*/

const textArea = document.getElementById('text-area');
const wordCountDisplay = document.getElementById('word-count');

textArea.addEventListener('input', updateWordCount);

function updateWordCount() {
  const text = textArea.value.trim();
  const words = text.split(/\s+/).length;
  wordCountDisplay.textContent = 'Word Count: ' + words;
}










