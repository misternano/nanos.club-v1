$(document).ready(function() {
    var text = [
        "maybe the next step in your healing journey is telling more people to fuck right off.",
        "sometimes the reason good things aren't happening to you is because you're a huge fucking cunt.",
        "amazing things will happen today if you decide not to be a miserable cunt.",
        "maybe the only reason you think you're not good enough is because you're surrounded by a bunch of cunts."
    ];
    var x = Math.floor((Math.random() * 4)); /* change number to fit how many quotes are in the array */
    $('#quote').html(text[x]);
});