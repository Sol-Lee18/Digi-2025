import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase, ref, get} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";


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


    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("postId");

    if (postId) {
      const postRef = ref(db, `posts/${postId}`);
      get(postRef).then((snapshot) => {
        if (snapshot.exists()) {
          const post = snapshot.val();
          document.getElementById("post-title").innerText = post.title || "Untitled";
          document.getElementById("post-author").innerText = post.author || "Anonymous";
          document.getElementById("post-content").innerText = post.content || "";
        } else {
          document.getElementById("post-title").innerText = "Post not found";
          document.getElementById("post-author").innerText = post.author || "";
          document.getElementById("post-content").innerText = "";
        }
      });
    } else {
      document.getElementById("post-title").innerText = "No post specified";
      document.getElementById("post-author").innerText = post.author || "";
      document.getElementById("post-content").innerText = "";
    }
