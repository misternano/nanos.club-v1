// FADE AWAY BOUNCING ARROW
$(window).scroll(() => { $("#projectsBtn").css("opacity", 1 - $(window).scrollTop() / 500); });

// MAKE BUTTON APPEAR AT 750 PX DOWN
window.onscroll = () => {
    if ($(window).scrollTop() > 750) {
        $("#topBtn").css("display", "block");
    } else {
        $("#topBtn").css("display", "none");
    }
}

// MAKE BUTTON SCROLL TO TOP
const scrollTopFunction = () => $(window).scrollTop(0);