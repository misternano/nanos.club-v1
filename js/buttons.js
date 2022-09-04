var topbutton = document.getElementById("topBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 1000) { // 1299px until button appears
        topbutton.style.display = "block";
    } else {
        topbutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// FADE AWAY BOUNCING ARROW ON PROJECTS
$(window).scroll(function() {
    $("#projectsBtn").css("opacity", 1 - $(window).scrollTop() / 500);
});