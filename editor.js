// editor //

// tool bar buttons //

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


// word count

const textArea = document.getElementById('text-area');
const wordCountDisplay = document.getElementById('word-count');

textArea.addEventListener('input', updateWordCount);

function updateWordCount() {
  const text = textArea.value.trim();
  const words = text.split(/\s+/).length;
  wordCountDisplay.textContent = 'Word Count: ' + words;
}


// database 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDNCknujv99lhPkfXdQ4dRJVc-H8ZJg-M8",
    authDomain: "acacia-pages-database.firebaseapp.com",
    databaseURL: "https://acacia-pages-database-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "acacia-pages-database",
    storageBucket: "acacia-pages-database.firebasestorage.app",
    messagingSenderId: "456686471317",
    appId: "1:456686471317:web:8e04adffa50507c7ecf39c",
    measurementId: "G-47S5H3ZR6S"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const submitButton = document.getElementById('submit-post');

  //publish button

submitButton.addEventListener('click', () => {
  const title = document.getElementById('story-title').value.trim();
  const author = document.getElementById('story-author').value.trim();
  const content = document.getElementById('text-area').value.trim();

  if (!title || !content) {
    alert("Please add a title and write something before publishing!");
    return;
  }

  const postsRef = ref(database, 'posts'); 
  const newPostRef = push(postsRef);

  
  set(newPostRef, {
    title: title,
    author: author,
    content: content,
    timestamp: Date.now()
  })
  .then(() => {
    alert("Your story has been published!");
    document.getElementById('story-title').value = '';
    document.getElementById('story-author').value = '';
    document.getElementById('text-area').value = '';
  })
  .catch((error) => {
    alert("Error publishing story: " + error.message);
  });
});








