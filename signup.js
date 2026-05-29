
$(document).ready(function () {

    // =========================
    // LIVE PROFILE PREVIEW (jQuery required)
    // =========================

    $("#fullName").on("input", function () {
        $("#previewName").text($(this).val() || "Your Name");
    });

    $("#bio").on("input", function () {
        $("#previewBio").text($(this).val() || "Your bio will appear here...");
    });

    $("#interests").on("input", function () {
        let interests = $(this).val().split(",");
        $("#previewInterests").empty();

        interests.forEach(function (item) {
            let tag = item.trim();
            if (tag !== "") {
                $("#previewInterests").append(`<span class="tag">${tag}</span>`);
            }
        });
    });


    // =========================
    // REAL-TIME VALIDATION
    // =========================

    function validateName() {
        let name = $("#fullName").val().trim();

        if (name === "") {
            $("#nameError").text("Full name is required");
            $("#fullName").addClass("error-border");
            return false;
        } else {
            $("#nameError").text("");
            $("#fullName").removeClass("error-border");
            return true;
        }
    }

    function validateStudentNumber() {
        let num = $("#studentNumber").val().trim();

        if (!/^[0-9]+$/.test(num)) {
            $("#studentError").text("Student number must be numeric");
            $("#studentNumber").addClass("error-border");
            return false;
        } else {
            $("#studentError").text("");
            $("#studentNumber").removeClass("error-border");
            return true;
        }
    }

    function validateEmail() {
        let email = $("#email").val().trim();
        let pattern = /^\S+@\S+\.\S+$/;

        if (!pattern.test(email)) {
            $("#emailError").text("Enter a valid email address");
            $("#email").addClass("error-border");
            return false;
        } else {
            $("#emailError").text("");
            $("#email").removeClass("error-border");
            return true;
        }
    }

    function validatePassword() {
        let password = $("#password").val();

        if (password.length < 8) {
            $("#passwordError").text("Password must be at least 8 characters");
            $("#password").addClass("error-border");
            return false;
        } else {
            $("#passwordError").text("");
            $("#password").removeClass("error-border");
            return true;
        }
    }

    function validateConfirmPassword() {
        let password = $("#password").val();
        let confirm = $("#confirmPassword").val();

        if (confirm !== password) {
            $("#confirmError").text("Passwords do not match");
            $("#confirmPassword").addClass("error-border");
            return false;
        } else {
            $("#confirmError").text("");
            $("#confirmPassword").removeClass("error-border");
            return true;
        }
    }


    // =========================
    // LIVE VALIDATION EVENTS
    // =========================

    $("#fullName").on("input", validateName);
    $("#studentNumber").on("input", validateStudentNumber);
    $("#email").on("input", validateEmail);
    $("#password").on("input", validatePassword);
    $("#confirmPassword").on("input", validateConfirmPassword);


    // =========================
    // FORM SUBMIT
    // =========================

    $("#signupForm").on("submit", function (e) {
        e.preventDefault();

        let valid =
            validateName() &
            validateStudentNumber() &
            validateEmail() &
            validatePassword() &
            validateConfirmPassword();

        if (!valid) return;

        // build user object
        let user = {
            fullName: $("#fullName").val().trim(),
            studentNumber: $("#studentNumber").val().trim(),
            campus: $("#campus").val(),
            email: $("#email").val().trim(),
            password: $("#password").val(),
            interests: $("#interests").val().split(",").map(i => i.trim()),
            bio: $("#bio").val().trim()
        };

        // save to localStorage
        localStorage.setItem("user", JSON.stringify(user));

        // redirect
        window.location.href = "profile.html";
    });

});