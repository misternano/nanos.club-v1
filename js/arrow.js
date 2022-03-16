$(window).scroll(function() {
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 150); //last number is fade pixels
});