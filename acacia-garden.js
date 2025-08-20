import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
    import { getDatabase, ref, query, orderByChild, onValue, get, set, child} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";


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

    const postsContainer = document.getElementById("posts");
    const searchBar = document.querySelector(".search-input");

    let allPosts = []; 

    function renderPosts(posts) {
        postsContainer.innerHTML = ""; 

        posts.forEach((post) => {
            const preview = document.createElement("div");
            preview.classList.add("preview");

            preview.innerHTML = `
                        <div class="preview-title-div">
                            <h2 class="preview-title-output">${post.title || "Untitled"}</h2>
                            <h3 class="preview-author-output">${post.author || "anonymous"}</h3>
                        </div>
                        <div class="preview-body-div">
                            <p class="preview-body-output">${post.content ? post.content.split(" ").slice(0, 30).join(" ") + (post.content.split(" ").length > 30 ? "..." : "") : ""}</p>
                        </div>
                        <div class="preview-likes-grid">
                            <button class="like-button"><img alt="like button image" src="./images/heart.png"></button>
                            <span class="like-count">${post.likes || 0}</span>
                        </div>
                    `;

            preview.querySelector(".preview-body-div").addEventListener("click", () => {
            window.location.href = `./post.html?postId=${post.key}`;
            });

            postsContainer.appendChild(preview);

            // Like Button

            const likeButton = preview.querySelector('.like-button');
            const likeCount = preview.querySelector('.like-count');
            const likedPosts = {}; 
            const likeRef = ref(db, 'likes/' + post.key);

            get(likeRef).then(snapshot => {
                if (snapshot.exists()) {
                    likeCount.textContent = snapshot.val();
                } else {
                    likeCount.textContent = 0;
                }
            });

            likeButton.addEventListener('click', () => {
                if (likedPosts[post.key]) return; 

                let current = parseInt(likeCount.textContent) || 0;
                current++;
                likeCount.textContent = current;

                set(likeRef, current); 
                likedPosts[post.key] = true; 
                
                likeButton.classList.add('disabled');
            });

        });
    }

    const postsQuery = query(ref(db, "posts"), orderByChild("timestamp"));

    onValue(postsQuery, (snapshot) => {
    allPosts = [];

    snapshot.forEach((childSnapshot) => {
        allPosts.push({
        key: childSnapshot.key,
        ...childSnapshot.val(),
        });
    });

    allPosts.sort((a, b) => b.timestamp - a.timestamp);

    renderPosts(allPosts);
    });

    
    // Search
    searchBar.addEventListener("keyup", (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = allPosts.filter(
        (post) =>
        (post.title && post.title.toLowerCase().includes(term)) ||
        (post.author && post.author.toLowerCase().includes(term))
    );
    renderPosts(filtered);
    });