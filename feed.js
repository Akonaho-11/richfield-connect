
$(document).ready(function () {

    // =========================
    // GET USER + POSTS FROM LOCALSTORAGE
    // =========================

    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        window.location.href = "signup.html";
        return;
    }

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    // =========================
    // RENDER POSTS FUNCTION
    // =========================

    function renderPosts() {
        $("#feed").empty();

        posts.forEach(function (post) {

            let postElement = $(`
                <div class="post" data-id="${post.id}">
                    <h4>${post.username}</h4>
                    <small>${post.timestamp}</small>
                    <p>${post.content}</p>

                    <button class="likeBtn">
                        Like ❤️ <span>${post.likes}</span>
                    </button>

                    <button class="deleteBtn">Delete 🗑</button>
                </div>
            `);

            // fade in animation (UI enhancement mark)
            postElement.hide().fadeIn(400);

            $("#feed").prepend(postElement);
        });
    }

    renderPosts();

    // =========================
    // CREATE NEW POST
    // =========================

    $("#postBtn").on("click", function () {

        let content = $("#postInput").val().trim();

        if (content === "") return;

        let newPost = {
            id: Date.now(),
            username: user.fullName,
            content: content,
            timestamp: new Date().toLocaleString(),
            likes: 0
        };

        posts.push(newPost);
        localStorage.setItem("posts", JSON.stringify(posts));

        $("#postInput").val("");

        renderPosts();
    });

    // =========================
    // LIKE FUNCTIONALITY
    // =========================

    $(document).on("click", ".likeBtn", function () {

        let postId = $(this).closest(".post").data("id");

        posts = posts.map(function (post) {
            if (post.id === postId) {
                post.likes++;
            }
            return post;
        });

        localStorage.setItem("posts", JSON.stringify(posts));
        renderPosts();
    });

    // =========================
    // DELETE POST FUNCTIONALITY
    // =========================

    $(document).on("click", ".deleteBtn", function () {

        let postId = $(this).closest(".post").data("id");

        if (confirm("Are you sure you want to delete this post?")) {

            posts = posts.filter(function (post) {
                return post.id !== postId;
            });

            localStorage.setItem("posts", JSON.stringify(posts));
            renderPosts();
        }
    });

});