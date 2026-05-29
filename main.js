// ==========================================
// RICHFIELD CONNECT - MAIN JAVASCRIPT FILE
// ==========================================

$(document).ready(function () {

    // ==========================================
    // NAVIGATION HOVER ANIMATION
    // ==========================================

    $(".nav-links a").hover(

        function () {

            $(this).stop().animate({
                paddingLeft: "10px"
            }, 200);

        },

        function () {

            $(this).stop().animate({
                paddingLeft: "0px"
            }, 200);

        }

    );


    // ==========================================
    // HERO SECTION FADE-IN EFFECT
    // ==========================================

    $(".hero-content").hide().fadeIn(1500);


    // ==========================================
    // FEATURE CARD HOVER EFFECT
    // ==========================================

    $(".feature-card, .why-card").hover(

        function () {

            $(this).css({
                transform: "scale(1.03)",
                transition: "0.3s"
            });

        },

        function () {

            $(this).css({
                transform: "scale(1)"
            });

        }

    );


    // ==========================================
    // BUTTON HOVER EFFECT
    // ==========================================

    $(".btn").hover(

        function () {

            $(this).css({
                opacity: "0.9"
            });

        },

        function () {

            $(this).css({
                opacity: "1"
            });

        }

    );


    // ==========================================
    // SMOOTH SCROLL EFFECT
    // ==========================================

    $("a").on("click", function (event) {

        // Only apply smooth scroll to same-page links
        if (this.hash !== "") {

            event.preventDefault();

            const hash = this.hash;

            $("html, body").animate({

                scrollTop: $(hash).offset().top

            }, 800);

        }

    });


    // ==========================================
    // CTA SECTION ANIMATION
    // ==========================================

    $(".cta").hide().slideDown(1200);


    // ==========================================
    // PAGE LOAD ANIMATION
    // ==========================================

    $("body").css("display", "none");

    $("body").fadeIn(1000);


    // ==========================================
    // CONSOLE MESSAGE
    // ==========================================

    console.log("Richfield Connect Loaded Successfully");

});