// CHANGE GREETING
$(document).ready(function() {
    const text = ["Hi", "Hey", "Hello"];
    const x = Math.floor((Math.random() * text.length));
    $('#greet').html(text[x]);
});

// CHANGE QUOTE
$(document).ready(function() {
    const text = [
        "maybe the next step in your healing journey is telling more people to fuck right off.",
        "sometimes the reason good things aren't happening to you is because you're a huge fucking cunt.",
        "amazing things will happen today if you decide not to be a miserable cunt.",
        "maybe the only reason you think you're not good enough is because you're surrounded by a bunch of cunts."
    ];
    const x = Math.floor((Math.random() * text.length));
    $('#quotes').html(text[x]);
});