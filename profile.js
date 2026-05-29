$(document).ready(function () {

    // =========================
    // GET USER FROM LOCALSTORAGE
    // =========================

    let user = JSON.parse(localStorage.getItem("user"));

    // =========================
    // SAFE CHECK (NO REDIRECT FLASHING)
    // =========================

    if (!user) {
        console.log("No user found in localStorage");

        $("#name").text("No user found");
        $("#student").text("-");
        $("#email").text("-");
        $("#campus").text("-");
        $("#bioDisplay").text("Please sign up first.");

        $("#interestsDisplay").html("<span class='tag'>No interests</span>");

        return;
    }

    // =========================
    // POPULATE PROFILE DATA
    // =========================

    $("#name").text(user.fullName || "N/A");
    $("#student").text(user.studentNumber || "N/A");
    $("#email").text(user.email || "N/A");
    $("#campus").text(user.campus || "N/A");
    $("#bioDisplay").text(user.bio || "No bio available");

    // =========================
    // INTERESTS DISPLAY
    // =========================

    $("#interestsDisplay").empty();

    if (user.interests && Array.isArray(user.interests) && user.interests.length > 0) {
        user.interests.forEach(function (interest) {
            if (interest && interest.trim() !== "") {
                $("#interestsDisplay").append(
                    `<span class="tag">${interest}</span>`
                );
            }
        });
    } else {
        $("#interestsDisplay").html("<span class='tag'>No interests</span>");
    }

    // =========================
    // FADE IN EFFECT
    // =========================

    $(".form-box, .preview-box").hide().fadeIn(800);

    // =========================
    // TOGGLE BIO
    // =========================

    $("#toggleBio").on("click", function () {
        $("#bioDisplay").slideToggle(300);
    });

    // =========================
    // TAG HOVER ANIMATION
    // =========================

    $(document).on("mouseenter", ".tag", function () {
        $(this).animate({ opacity: 0.6, marginTop: "-2px" }, 150);
    });

    $(document).on("mouseleave", ".tag", function () {
        $(this).animate({ opacity: 1, marginTop: "0px" }, 150);
    });

});