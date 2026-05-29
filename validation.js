$("#signupForm").submit(function(e){

    e.preventDefault();

    const user = {

        fullname: $("#fullname").val(),

        studentNumber: $("#studentNumber").val(),

        campus: $("#campus").val(),

        email: $("#email").val(),

        password: $("#password").val(),

        interests: $("#interests").val(),

        bio: $("#bio").val()

    };

    // SAVE USER

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    // TEST

    console.log("User saved!");

    // GO TO PROFILE PAGE

    window.location.href = "profile.html";

});