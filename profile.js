$(document).ready(function () {

    // =========================
    // GET USER FROM LOCALSTORAGE
    // =========================

    let user = JSON.parse(localStorage.getItem("user"));

    // If no user found, redirect to signup
    if (!user) {
        window.location.href = "signup.html";
        return;
    }

    // =========================
    // POPULATE PROFILE DATA
    // =========================

    $("#name").text(user.fullName);
    $("#student").text(user.studentNumber);
    $("#email").text(user.email);
    $("#campus").text(user.campus);
    $("#bioDisplay").text(user.bio);

    // Interests (dynamic tags)
    $("#interestsDisplay").empty();

    if (user.interests && user.interests.length > 0) {
        user.interests.forEach(function (interest) {
            if (interest.trim() !== "") {
                $("#interestsDisplay").append(
                    `<span class="tag">${interest}</span>`
                );
            }
        });
    }

    // =========================
    // jQuery UI ENHANCEMENT #1
    // Fade-in profile on load
    // =========================

    $(".form-box, .preview-box").hide().fadeIn(800);

    // =========================
    // jQuery UI ENHANCEMENT #2
    // Slide toggle bio section
    // =========================

    $("#toggleBio").on("click", function () {
        $("#bioDisplay").slideToggle(300);
    });

    // =========================
    // jQuery UI ENHANCEMENT #3
    // Hover animation effect
    // =========================

    $(".tag").hover(
        function () {
            $(this).animate({ opacity: 0.6, marginTop: "-2px" }, 150);
        },
        function () {
            $(this).animate({ opacity: 1, marginTop: "0px" }, 150);
        }
    );

});