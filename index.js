// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
    const db = getDatabase(app);

    const postCountLabel = document.getElementById('total-posts-count');

    const postsRef = ref(db, "posts");

    onValue(postsRef, (snapshot) => {
        const count = snapshot.size; 
        postCountLabel.textContent = count;
    });